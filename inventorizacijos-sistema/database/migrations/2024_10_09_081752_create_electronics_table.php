<?php

use App\Models\Location;
use App\Models\Manufacturer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('electronics', function (Blueprint $table) {
            $table->id();
            $table->string('inv_code');
            $table->string('type');
            $table->foreignIdFor(Manufacturer::class)->constrained('manufacturers')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('status');
            $table->foreignIdFor(Location::class)->constrained('locations')->cascadeOnDelete()->cascadeOnUpdate();
            $table->date('manufacture_date');
            $table->date('acquisition_date');            
            $table->timestamps();
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('electronics');
    }
};



