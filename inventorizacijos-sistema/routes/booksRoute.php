<?php

use App\Http\Controllers\BookController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;

/*Displaying the list of book */

Route::get('/book', [BookController::class, 'index'])->name('book.index');

Route::middleware(['auth', IsAdmin::class])->group(function () {
    /*Creating and storing new book*/
    Route::get('/book/create', [BookController::class, 'create'])->name('book.create');
    Route::post('/book/create', [BookController::class, 'store'])->name('book.store');

    /*Editing and updating existing book data */
    Route::get('/book/edit/{book}', [BookController::class, 'edit'])->name('book.edit');
    Route::post('/book/edit/{book}', [BookController::class, 'update'])->name('book.update');
    
    /*Deleting book data */
    Route::delete('/book/{book}', [BookController::class, 'destroy'])->name('book.destroy');
});

// Route::get('/book/create', [BookController::class, 'create'])->name('book.create');
// Route::post('/book/create', [BookController::class, 'store'])->name('book.store');


/*Displaying specified book data not needed as of now*/
Route::get('/book/view/{id}', [BookController::class, 'show'])->name('book.show');
