<?php

use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of location */
Route::get('/location', [LocationController::class, 'index'])->name('location.index');

/*Creating and storing new location data */
Route::get('/location/create', [LocationController::class, 'create'])->name('location.create');
Route::post('/location', [LocationController::class, 'store'])->name('location.store');

/*Displaying specified location data */
Route::get('/location/view/{id}', [LocationController::class, 'show'])->name('location.show');

/*Editing and updating existing location data */
Route::get('/location/edit/{id}', [LocationController::class, 'edit'])->name('location.edit');
Route::post('/location/edit/{id}', [LocationController::class, 'update'])->name('location.update');

/*Deleting location data */
Route::get('/location/destroy/{id}', [LocationController::class, 'destroy'])->name('location.delete');
