<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office_supplies extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'manufacturer_id',
        'status',
        'acquisition_date',
    ];

    /**
     * Get the manufacturer that owns the office supply.
     */
    public function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }
}