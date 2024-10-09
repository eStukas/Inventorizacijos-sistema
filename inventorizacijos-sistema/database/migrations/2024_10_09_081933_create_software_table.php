<?php

use App\Models\Manufacturer;
use App\Models\Software_type;
use App\Models\Status;
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
        Schema::create('software', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Software_type::class)->constrained('software_types')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Manufacturer::class)->constrained('manufacturers')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Status::class)->constrained('statuses')->cascadeOnDelete()->cascadeOnUpdate();
            $table->date('purchase_date');
            $table->date('valid_until');
            $table->integer('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('software');
    }
};
