<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'type',
        'author',
        'status',
        'release_date',
        'location_id',
        'acquisition_date'
    ];
}
