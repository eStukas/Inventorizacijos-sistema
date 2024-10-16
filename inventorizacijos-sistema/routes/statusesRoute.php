<?php

use App\Http\Controllers\StatusController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of status */
Route::get('/status', [StatusController::class, 'index'])->name('status.index');

/*Creating and storing new status data */
Route::get('/status/create', [StatusController::class, 'create'])->name('status.create');
Route::post('/status/create', [StatusController::class, 'store'])->name('status.store');

/*Displaying specified status data*/ 
Route::get('/status/view/{id}', [StatusController::class, 'show'])->name('status.show');

/*Editing and updating existing status data */
Route::get('/status/edit/{id}', [StatusController::class, 'edit'])->name('status.edit');
Route::post('/status/edit/{id}', [StatusController::class, 'update'])->name('status.update');

/*Deleting status data */
Route::get('/status/destroy/{id}', [StatusController::class, 'destroy'])->name('status.delete');










