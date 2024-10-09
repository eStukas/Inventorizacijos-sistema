<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office_supplies extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'type',
        'manufacturer',
        'status',
        'acquisition_date'
    ];
}
