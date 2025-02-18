<?php

use App\Http\Controllers\ManufacturerController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin;
/*Displaying the list of manufacturer */
Route::get('/manufacturer', [ManufacturerController::class, 'index'])->name('manufacturer.index');

Route::middleware(['auth', IsAdmin::class])->group(function(){
    /*Creating and storing new manufacturer data */
    Route::get('/manufacturer/create', [ManufacturerController::class, 'create'])->name('manufacturer.create');
    Route::post('/manufacturer/create', [ManufacturerController::class, 'store'])->name('manufacturer.store');
    
    /*Displaying specified manufacturer data */
    Route::get('/manufacturer/view/{id}', [ManufacturerController::class, 'show'])->name('manufacturer.show');
    
    /*Editing and updating existing manufacturer data */
    Route::get('/manufacturer/edit/{manufacturer}', [ManufacturerController::class, 'edit'])->name('manufacturer.edit');
    Route::post('/manufacturer/edit/{manufacturer}', [ManufacturerController::class, 'update'])->name('manufacturer.update');
    
    /*Deleting manufacturer data */
    Route::delete('/manufacturer/{manufacturer}', [ManufacturerController::class, 'destroy'])->name('manufacturer.destroy');
});
