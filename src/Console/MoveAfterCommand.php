<?php

/*
 * This file is part of fof/sitemap.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE
 *  file that was distributed with this source code.
 *
 */

namespace ClarkWinkelmann\CatchTheFish\Console;

use Carbon\Carbon;
use ClarkWinkelmann\CatchTheFish\Repositories\Placement;
use ClarkWinkelmann\CatchTheFish\Fish;
use ClarkWinkelmann\CatchTheFish\Round;
use Illuminate\Console\Command;
use Illuminate\Contracts\Events\Dispatcher;

class MoveAfterCommand extends Command
{
    protected $signature = 'runig006:fish:move';
    protected $description = 'Check for any fish not catched in an hour and move it';

    public function handle(Dispatcher $dispatcher)
    {
        $round = Round::activeRound()->pluck('id');
        if(count($round) == 0){
            return;
        }
        $fish = Fish::whereIn('round_id', $round)->where(function ($q) {
            $q->where('last_caught_at', '<=', Carbon::parse('-1 hour'));
            $q->orWhereNull('last_caught_at');
        })->get();
        foreach ($fish as $f) {
            $f->user_id_last_placement = null;
            $f->last_caught_at = Carbon::now();
            $f->lastUserCatch()->associate(null);
            Placement::random()->assign($f);
            $placementValidSince = Carbon::now();
            $f->placement_valid_since = $placementValidSince;
            $f->save();
        }
    }
}
