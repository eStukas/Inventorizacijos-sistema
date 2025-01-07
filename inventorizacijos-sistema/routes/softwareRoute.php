<?php

use App\Http\Controllers\SoftwareController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin;

/*Displaying the list of software */
Route::get('/software', [SoftwareController::class, 'index'])->name('software.index');

Route::middleware(['auth', IsAdmin::class])->group(function(){
    /*Creating and storing new software data */
    Route::get('/software/create', [SoftwareController::class, 'create'])->name('software.create');
    Route::post('/software/create', [SoftwareController::class, 'store'])->name('software.store');
    
    /*Displaying specified software data */
    Route::get('/software/view/{id}', [SoftwareController::class, 'show'])->name('software.show');
    
    /*Editing and updating existing software data */
    Route::get('/software/edit/{software}', [SoftwareController::class, 'edit'])->name('software.edit');
    Route::put('/software/edit/{software}', [SoftwareController::class, 'update'])->name('software.update');
    
    /*Deleting software data */
    Route::delete('/software/{software}', [SoftwareController::class, 'destroy'])->name('software.delete');
});
