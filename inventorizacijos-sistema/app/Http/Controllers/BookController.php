<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $book = Book::all();
        return Inertia::render('Book/BookIndex', ['books' => $book]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Book/BookAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'release_date' => 'required|date',
            'location_id' => 'required|exists:locations,id',
            'acquisition_date' => 'required|date'
        ]);

        $book = Book::create($validated);

        return Inertia::render('Book/BookIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $books)
    {
        //return response()->json($books);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $books)
    {
        return Inertia::render('Book/BookEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $books)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'release_date' => 'required|date',
            'location_id' => 'required|exists:locations,id',
            'acquisition_date' => 'required|date'
        ]);

        $books->update($validated);

        return Inertia::render('Book/BookIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $books)
    {
        $books->delete();

        return redirect()->route('book.index')->with('success', 'Book deleted successfully.');
    }
}
