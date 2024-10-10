<?php

use App\Http\Controllers\ManufacturerController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of manufacturer */
Route::get('manufacturer/', [ManufacturerController::class, 'index'])->name('manufacturer.index');

/*Creating and storing new manufacturer data */
Route::get('manufacturer/create', [ManufacturerController::class, 'create'])->name('manufacturer.create');
Route::post('manufacturer', [ManufacturerController::class, 'store'])->name('manufacturer.store');

/*Displaying specified manufacturer data */
Route::post('manufacturer/{id}', [ManufacturerController::class, 'show'])->name('manufacturer.show');

/*Editing and updating existing manufacturer data */
Route::get('manufacturer/edit/{id}', [ManufacturerController::class, 'edit'])->name('manufacturer.edit');
Route::post('manufacturer/{id}', [ManufacturerController::class, 'update'])->name('manufacturer.update');

/*Deleting furniture data */
Route::get('manufacturer/{id}', [ManufacturerController::class, 'destroy'])->name('manufacturer.delete');
