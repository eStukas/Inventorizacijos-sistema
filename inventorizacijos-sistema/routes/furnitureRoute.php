<?php

use App\Http\Controllers\FurnitureController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of furniture */
Route::get('furniture', [FurnitureController::class, 'index'])->name('furniture.index');

/*Creating and storing new furniture data */
Route::get('furniture/create', [FurnitureController::class, 'create'])->name('furniture.create');
Route::post('furniture', [FurnitureController::class, 'store'])->name('furniture.store');

/*Displaying specified furniture data */
Route::post('furniture/{id}', [FurnitureController::class, 'show'])->name('furniture.show');

/*Editing and updating existing furniture data */
Route::get('furniture/edit/{id}', [FurnitureController::class, 'edit'])->name('furniture.edit');
Route::post('furniture/{id}', [FurnitureController::class, 'update'])->name('furniture.update');

/*Deleting furniture data */
Route::get('furniture/{id}', [FurnitureController::class, 'destroy'])->name('furniture.delete');
