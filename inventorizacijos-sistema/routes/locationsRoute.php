<?php


use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;

/* Displaying the list of locations */
Route::get('/location', [LocationController::class, 'index'])->name('location.index');

/* Creating and storing new location data */
Route::get('/location/create', [LocationController::class, 'create'])->name('location.create');
Route::post('/location/create', [LocationController::class, 'store'])->name('location.store');

/* Editing and updating existing location data */
Route::get('/location/edit/{location}', [LocationController::class, 'edit'])->name('location.edit');
Route::post('/location/edit/{location}', [LocationController::class, 'update'])->name('location.update');

/* Deleting location data */
// Route::get('/location/destroy/{id}', [LocationController::class, 'destroy'])->name('location.delete');


Route::delete('/location/{location}', [LocationController::class, 'destroy'])->name('location.destroy');

