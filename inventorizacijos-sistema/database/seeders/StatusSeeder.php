<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            [
                'name' => 'Gerai',
                'status_color' => '#33FF33'
            ],
            [
                'name' => 'Blogai',
                'status_color' => '#FF0000'
            ],
            [
                'name' => 'Laukiama',
                'status_color' => '#FFFF00'
            ]
        ];

        
        foreach ($statuses as $i => $status_obj) {
            $status = Status::where('name', '=', $status_obj['name'])->first();
            if ($status == null) {
                Status::create($status_obj);
                info($status_obj['name'] . ' status was created!');
            }
        }
    }
}
