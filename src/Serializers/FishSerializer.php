<?php

namespace ClarkWinkelmann\CatchTheFish\Serializers;

use ClarkWinkelmann\CatchTheFish\Fish;
use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Foundation\ValidationException;

class FishSerializer extends AbstractSerializer
{
    protected $type = 'catchthefish-fishes';

    protected function actorCan($ability, $arguments = [])
    {
        // Handle ValidationExceptions in policy as a denied policy
        // Would have been better with AuthorizationExceptions but these aren't available until a newer Laravel
        try {
            return $this->actor->can($ability, $arguments);
        } catch (ValidationException $exception) {
            return false;
        }
    }

    /**
     * @param Fish $fish
     * @return array
     */
    protected function getDefaultAttributes($fish)
    {
        $canPlace = $this->actorCan('place', $fish);

        return [
            'name' => $fish->name,
            'image_url' => $fish->image_url,
            'placement' => $this->actorCan('catch', $fish) ? [
                'discussion_id' => $fish->discussion_id_placement,
                'post_id' => $fish->post_id_placement,
                'user_id' => $fish->user_id_placement,
            ] : null,
            'canCatch' => $this->actorCan('catch', $fish),
            'canName' => $this->actorCan('name', $fish),
            'canPlace' => $canPlace,
            'placeUntil' => $canPlace ? $this->formatDate($fish->placement_valid_since) : null,
        ];
    }

    public function lastUserPlacement($fish)
    {
        return $this->buildRelationship($fish, UserSerializer::class, 'lastUserPlacement');
    }

    public function lastUserNaming($fish)
    {
        return $this->buildRelationship($fish, UserSerializer::class, 'lastUserNaming');
    }
}
