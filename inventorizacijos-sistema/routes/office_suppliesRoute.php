<?php

use App\Http\Controllers\OfficeSuppliesController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin;

/*Displaying the list of office_supplies */

Route::get('/office_supplies', [OfficeSuppliesController::class, 'index'])->name('office_supplies.index');

Route::middleware(['auth', IsAdmin::class])->group(function () {
    /*Creating and storing new office_supplies data */
    Route::get('/office_supplies/create', [OfficeSuppliesController::class, 'create'])->name('office_supplies.create');
    Route::post('/office_supplies/create', [OfficeSuppliesController::class, 'store'])->name('office_supplies.store');

    /*Displaying specified office_supplies data */
    Route::get('/office_supplies/view/{id}', [OfficeSuppliesController::class, 'show'])->name('office_supplies.show');

    /*Editing and updating existing office_supplies data */
    Route::get('/office_supplies/edit/{office_supplies}', [OfficeSuppliesController::class, 'edit'])->name('office_supplies.edit');
    Route::put('/office_supplies/edit/{office_supplies}', [OfficeSuppliesController::class, 'update'])->name('office_supplies.update');

    /*Deleting office_supplies data */
    Route::delete('/office_supplies/{office_supplies}', [OfficeSuppliesController::class, 'destroy'])->name('office_supplies.destroy');
});
