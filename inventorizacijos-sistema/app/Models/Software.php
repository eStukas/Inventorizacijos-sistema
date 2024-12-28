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

    public function software_type()
    {
        return $this->belongsTo(Software_type::class);
    }
    public function manufacturer(){
        return $this->belongsTo(Manufacturer::class);
    }
    public function status(){
        return $this->belongsTo(Status::class);
    }

}
