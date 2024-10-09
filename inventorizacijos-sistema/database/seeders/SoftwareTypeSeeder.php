<?php

namespace Database\Seeders;

use App\Models\Software_type;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SoftwareTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $software_types = [
            [
                'name' => 'Licenzija (1 mėn.)',

            ],
            [
                'name' => 'Licenzija (1 met.)',

            ],
            [
                'name' => 'Prenumerata (1 mėn.)',

            ],
            [
                'name' => 'Prenumerata (1 met.)',

            ]
        ];

        foreach ($software_types as $i => $software_type_obj) {
            $software_type = Software_type::where('name', '=', $software_type_obj['name'])->first();
            if ($software_type == null)
            {
                Software_type::create($software_type_obj);
                info($software_type_obj['name']. ' software type was created!');
            }
            
        }
    }
}
