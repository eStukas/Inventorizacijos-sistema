<?php

use App\Mail\DeviceIsDown;
use App\Models\TV;
use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Support\Facades\Mail;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::call(function () {
    $tvs = TV::all();

    foreach ($tvs as $tv) {
        $now = Carbon::now();
        $last_ping = new Carbon($tv->last_ping);

        $diff = $last_ping->diffInMinutes($now);

        if ($diff >= 10 && $diff < 11) {
            Mail::to('it_komanda@mokykla.lt')->send(new DeviceIsDown($tv));
        }
    }
})->daily();