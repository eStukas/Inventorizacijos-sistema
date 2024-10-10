<?php

use App\Http\Controllers\SoftwareController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of software */
Route::get('software', [SoftwareController::class, 'index'])->name('software.index');

/*Creating and storing new software data */
Route::get('software/create', [SoftwareController::class, 'create'])->name('software.create');
Route::post('software', [SoftwareController::class, 'store'])->name('software.store');

/*Displaying specified software data */
Route::post('software/{id}', [SoftwareController::class, 'show'])->name('software.show');

/*Editing and updating existing software data */
Route::get('software/edit/{id}', [SoftwareController::class, 'edit'])->name('software.edit');
Route::post('software/{id}', [SoftwareController::class, 'update'])->name('software.update');

/*Deleting software data */
Route::get('software/{id}', [SoftwareController::class, 'destroy'])->name('software.delete');
