<?php

use App\Http\Controllers\FurnitureController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin;

/*Displaying the list of furniture */

Route::get('/furniture', [FurnitureController::class, 'index'])->name('furniture.index');


Route::middleware(['auth', IsAdmin::class])->group(function () {
    /*Creating and storing new furniture data */
    Route::get('/furniture/create', [FurnitureController::class, 'create'])->name('furniture.create');
    Route::post('/furniture/create', [FurnitureController::class, 'store'])->name('furniture.store');

    /*Displaying specified furniture data */
    Route::get('/furniture/view/{id}', [FurnitureController::class, 'show'])->name('furniture.show');

    /*Editing and updating existing furniture data */
    Route::get('/furniture/edit/{furniture}', [FurnitureController::class, 'edit'])->name('furniture.edit');
    Route::post('/furniture/edit/{furniture}', [FurnitureController::class, 'update'])->name('furniture.update');

    /*Deleting furniture data */
    Route::delete('/furniture/{furniture}', [FurnitureController::class, 'destroy'])->name('furniture.destroy');
});
