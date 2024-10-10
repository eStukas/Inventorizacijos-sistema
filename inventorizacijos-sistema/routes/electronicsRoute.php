<?php

use App\Http\Controllers\ElectronicsController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of electronics */
Route::get('electronics', [ElectronicsController::class, 'index'])->name('electronics.index');

/*Creating and storing new electronics data */
Route::get('electronics/create', [ElectronicsController::class, 'create'])->name('electronics.create');
Route::post('electronics', [ElectronicsController::class, 'store'])->name('electronics.store');

/*Displaying specified electronics data */
Route::post('electronics/{id}', [ElectronicsController::class, 'show'])->name('electronics.show');

/*Editing and updating existing electronics data */
Route::get('electronics/edit/{id}', [ElectronicsController::class, 'edit'])->name('electronics.edit');
Route::post('electronics/{id}', [ElectronicsController::class, 'update'])->name('electronics.update');

/*Deleting furniture data */
Route::get('electronics/{id}', [ElectronicsController::class, 'destroy'])->name('electronics.delete');
