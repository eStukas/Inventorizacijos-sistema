<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Furniture extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'type',
        'manufacturer_provider',
        'status',
        'acquisition_date'
    ];
}
