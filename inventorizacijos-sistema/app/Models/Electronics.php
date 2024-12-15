<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Electronics extends Model
{
    use HasFactory;

    protected $fillable = [
        'inv_code',
        'type',
        'manufacturer_id',
        'status',
        'location_id',
        'manufacture_date',
        'acquisition_date',
    ];

    /**
     * Relationship to the Manufacturer model.
     */
    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }

    /**
     * Relationship to the Location model.
     */
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}