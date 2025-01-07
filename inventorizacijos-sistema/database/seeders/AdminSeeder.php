<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'ernestastukas@gmail.com'], // Use a unique email
            [
                'name' => 'Admin',
                'password' => Hash::make('turkas789'), // Replace with a secure password
                'role' => 1, // Admin role
            ],
            
        );
    }
}
