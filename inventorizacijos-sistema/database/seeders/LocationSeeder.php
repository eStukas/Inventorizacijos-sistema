<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Laravel\Prompts\info;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $locations = ['I korpusas', 'II korpusas'];

        foreach ($locations as $location_name) {
            $location = Location::where('name', '=', $location_name)->first();
            if ($location == null) {
                Location::create(['name' => $location_name, 'type' => 'Korpusas']);
                info($location_name . ' location was created!');
            }
        }
    }
}
