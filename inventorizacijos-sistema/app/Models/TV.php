<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TV extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'ip_address', 'last_ping'];
}
