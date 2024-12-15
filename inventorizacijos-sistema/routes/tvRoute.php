<?php
use App\Http\Controllers\TVController;
use Illuminate\Support\Facades\Route;

Route::get('/tv-control', [TVController::class, 'index'])->name('tv.index'); // List TVs


/*Creating and storing new tv data */
Route::get('/tv-control/create', [TVController::class, 'create'])->name('tv.create');
Route::post('/tv-control/create', [TVController::class, 'store'])->name('tv.store');

/*Displaying specified tv data not needed as of now*/
Route::get('/tv-control/view/{id}', [TVController::class, 'show'])->name('tv.show');

/*Editing and updating existing TV data */
Route::get('/tv-control/edit/{tv}', [TVController::class, 'edit'])->name('tv.edit');
Route::post('/tv-control/edit/{tv}', [TVController::class, 'update'])->name('tv.update');

/*Deleting TV data */
Route::get('/tv-control/destroy/{id}', [TVController::class, 'destroy'])->name('tv.delete');

Route::get('/tv-control/ping/{tv}', [TVController::class, 'ping'])->name('tv.ping'); // Ping TV route

// TODO: create form&route / store route ----- done