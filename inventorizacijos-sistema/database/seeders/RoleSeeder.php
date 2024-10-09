<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['Darbuotojas', 'Administratorius', 'Svecias'];

        foreach ($roles as $role_name) {
            $role = Role::where('name', '=', $role_name)->first();
            if ($role == null){
                Role::create(['name' => $role_name]);
                info($role_name . ' role was created!');
            }


        }

    }
}
