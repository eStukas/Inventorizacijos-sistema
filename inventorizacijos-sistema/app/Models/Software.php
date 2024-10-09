<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Software extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'software_type_id',
        'manufacturer_id',
        'status_id',
        'purchase_date',
        'valid_until',
        'amount'
    ];
}
