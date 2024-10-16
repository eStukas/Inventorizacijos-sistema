<?php

use App\Http\Controllers\OfficeSuppliesController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of office_supplies */
Route::get('/office_supplies', [OfficeSuppliesController::class, 'index'])->name('office_supplies.index');

/*Creating and storing new office_supplies data */
Route::get('/office_supplies/create', [OfficeSuppliesController::class, 'create'])->name('office_supplies.create');
Route::post('/office_supplies/create', [OfficeSuppliesController::class, 'store'])->name('office_supplies.store');

/*Displaying specified office_supplies data */
Route::get('/office_supplies/view/{id}', [OfficeSuppliesController::class, 'show'])->name('office_supplies.show');

/*Editing and updating existing office_supplies data */
Route::get('/office_supplies/edit/{id}', [OfficeSuppliesController::class, 'edit'])->name('office_supplies.edit');
Route::post('/office_supplies/edit/{id}', [OfficeSuppliesController::class, 'update'])->name('office_supplies.update');

/*Deleting office_supplies data */
Route::get('/office_supplies/destroy/{id}', [OfficeSuppliesController::class, 'destroy'])->name('office_supplies.delete');
