<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

/*Displaying the list of book */
Route::get('book', [BookController::class, 'index'])->name('book.index');

/*Creating and storing new book data */
Route::get('book/create', [BookController::class, 'create'])->name('book.create');
Route::post('book', [BookController::class, 'store'])->name('book.store');

/*Displaying specified book data */
Route::post('book/{id}', [BookController::class, 'show'])->name('book.show');

/*Editing and updating existing book data */
Route::get('book/edit/{id}', [BookController::class, 'edit'])->name('book.edit');
Route::post('book/{id}', [BookController::class, 'update'])->name('book.update');

/*Deleting furniture data */
Route::get('book/{id}', [BookController::class, 'destroy'])->name('book.delete');
