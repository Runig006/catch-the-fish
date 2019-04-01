<?php

namespace ClarkWinkelmann\CatchTheFish\Repositories;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Round;
use ClarkWinkelmann\CatchTheFish\Validators\FishImageValidator;
use ClarkWinkelmann\CatchTheFish\Validators\FishValidator;
use Flarum\Locale\Translator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;
use Psr\Http\Message\UploadedFileInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FishRepository
{
    const BASE_IMAGES = [
        'pixabay-30828-640.png',
        'pixabay-30837-640.png',
        'pixabay-33712-640.png',
        'pixabay-36828-640.png',
        'pixabay-294469-640.png',
        'pixabay-1331813-640.png',
    ];

    public function all(Round $round)
    {
        return $round->fishes;
    }

    /**
     * @param $id
     * @return Model|Fish
     * @throws ModelNotFoundException
     */
    public function findOrFail($id): Fish
    {
        return Fish::query()->where('id', $id)->firstOrFail();
    }

    /**
     * @param Round $round
     * @param array $attributes
     * @return Fish
     * @throws ValidationException
     * @throws \Flarum\Foundation\ValidationException
     */
    public function store(Round $round, array $attributes): Fish
    {
        /**
         * @var $validator FishValidator
         */
        $validator = app(FishValidator::class);

        $validator->assertValid($attributes);

        $fish = new Fish($attributes);
        $fish->round()->associate($round);
        Placement::random()->assign($fish);
        $fish->placement_valid_since = Carbon::now();
        $fish->save();

        return $fish;
    }

    /**
     * @param Fish $fish
     * @param array $attributes
     * @return Fish
     * @throws ValidationException
     */
    public function update(Fish $fish, array $attributes): Fish
    {
        /**
         * @var $validator FishValidator
         */
        $validator = app(FishValidator::class);

        $validator->assertValid($attributes);

        if (array_has($attributes, 'name')) {
            // Remove the link to the last user who renamed the fish if an admin renames it via the admin panel
            $fish->user_id_last_naming = null;
        }

        $fish->fill($attributes);
        $fish->save();

        return $fish;
    }

    /**
     * @param Fish $fish
     * @param UploadedFileInterface $file
     * @return Fish
     * @throws ValidationException
     */
    public function updateImage(Fish $fish, UploadedFileInterface $file): Fish
    {
        $tmpFile = tempnam(app()->storagePath() . '/tmp', 'catch-the-fish');
        $file->moveTo($tmpFile);

        try {
            $file = new UploadedFile(
                $tmpFile,
                $file->getClientFilename(),
                $file->getClientMediaType(),
                $file->getSize(),
                $file->getError(),
                true
            );

            /**
             * @var $validator FishImageValidator
             */
            $validator = app(FishImageValidator::class);

            $validator->assertValid(['image' => $file]);

            $image = (new ImageManager())->make($tmpFile);

            /**
             * @var $uploader FishImageUploader
             */
            $uploader = app(FishImageUploader::class);
            $uploader->upload($fish, $image);

            $fish->save();
        } finally {
            @unlink($tmpFile);
        }

        return $fish;
    }

    /**
     * @param Round $round
     * @param UploadedFileInterface[] $files
     * @return Fish[]
     */
    public function bulkImageImport(Round $round, array $files): array
    {
        $filesToUnlink = [];

        /**
         * @var $validator FishImageValidator
         */
        $validator = app(FishImageValidator::class);

        /**
         * @var $uploader FishImageUploader
         */
        $uploader = app(FishImageUploader::class);

        $originalNames = [];

        try {
            return collect($files)->map(function (UploadedFileInterface $file, $index) use (&$filesToUnlink, &$originalNames, $validator) {
                // First we check and load all files
                $tmpFile = tempnam(app()->storagePath() . '/tmp', 'catch-the-fish');
                $file->moveTo($tmpFile);
                $filesToUnlink[] = $tmpFile;

                $originalNames[$index] = $file->getClientFilename();

                $file = new UploadedFile(
                    $tmpFile,
                    $file->getClientFilename(),
                    $file->getClientMediaType(),
                    $file->getSize(),
                    $file->getError(),
                    true
                );

                $validator->assertValid(['image' => $file]);

                return (new ImageManager())->make($tmpFile);
            })->map(function (Image $image, $index) use ($originalNames, $round, $uploader) {
                // Then we create the fishes and save the images
                $fish = new Fish();

                $uploader->upload($fish, $image);

                $fish->name = explode('.', $originalNames[$index])[0];
                $fish->round()->associate($round);
                Placement::random()->assign($fish);
                $fish->placement_valid_since = Carbon::now();
                $fish->save();

                return $fish;
            })->toArray();
        } finally {
            foreach ($filesToUnlink as $tmpFile) {
                @unlink($tmpFile);
            }
        }
    }

    /**
     * @param Fish $fish
     * @throws \Exception
     */
    public function delete(Fish $fish): void
    {
        /**
         * @var $uploader FishImageUploader
         */
        $uploader = app(FishImageUploader::class);
        $uploader->remove($fish);

        $fish->delete();
    }

    /**
     * @param Round $round
     * @throws \Flarum\Foundation\ValidationException
     */
    public function storeDefaultData(Round $round): void
    {
        /**
         * @var $uploader FishImageUploader
         */
        $uploader = app(FishImageUploader::class);

        /**
         * @var $translator Translator
         */
        $translator = app(Translator::class);

        $now = Carbon::now();

        foreach (self::BASE_IMAGES as $index => $originalImagePath) {
            $fish = new Fish();

            $image = (new ImageManager())->make(__DIR__ . '/../../resources/images/' . $originalImagePath);
            $uploader->upload($fish, $image);

            $fish->round_id = $round->id;
            $fish->name = $translator->trans('clarkwinkelmann-catch-the-fish.api.default-fish-name', [
                'number' => $index + 1,
            ]);
            Placement::random()->assign($fish);
            $fish->placement_valid_since = $now;
            $fish->save();
        }
    }
}
