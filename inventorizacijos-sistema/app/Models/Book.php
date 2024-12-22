<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'author',
        'status',
        'release_date',
        'location_id',
        'acquisition_date'
    ];
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
