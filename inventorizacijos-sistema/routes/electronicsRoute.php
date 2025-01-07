<?php

use App\Http\Controllers\ElectronicsController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;


/*Displaying the list of electronics */

Route::get('/electronics', [ElectronicsController::class, 'index'])->name('electronics.index');

Route::middleware(['auth', IsAdmin::class])->group(function () {
    /*Creating and storing new electronics data */
    Route::get('/electronics/create', [ElectronicsController::class, 'create'])->name('electronics.create');
    Route::post('/electronics/create', [ElectronicsController::class, 'store'])->name('electronics.store');

    /*Displaying specified electronics data */
    Route::get('/electronics/view/{id}', [ElectronicsController::class, 'show'])->name('electronics.show');

    /*Editing and updating existing electronics data */
    Route::get('/electronics/edit/{electronics}', [ElectronicsController::class, 'edit'])->name('electronics.edit');
    Route::put('/electronics/edit/{electronics}', [ElectronicsController::class, 'update'])->name('electronics.update');

    /*Deleting electronics data */
    Route::delete('/electronics/{electronics}', [ElectronicsController::class, 'destroy'])->name('electronics.destroy');
});
