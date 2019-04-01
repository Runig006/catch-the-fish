<?php

namespace ClarkWinkelmann\CatchTheFish\Controllers;

use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Repositories\FishRepository;
use ClarkWinkelmann\CatchTheFish\Repositories\PlacementRepository;
use ClarkWinkelmann\CatchTheFish\Serializers\FishSerializer;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FishCatchController extends AbstractShowController
{
    public $serializer = FishSerializer::class;

    protected $fishes;
    protected $placement;

    public function __construct(FishRepository $fishes, PlacementRepository $placement)
    {
        $this->fishes = $fishes;
        $this->placement = $placement;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     * @return Fish
     * @throws ModelNotFoundException
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = array_get($request->getQueryParams(), 'id');

        $fish = $this->fishes->findOrFail($id);

        return $this->placement->catch($request->getAttribute('actor'), $fish, $request->getParsedBody());
    }
}
