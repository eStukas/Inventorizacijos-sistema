<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $book = Book::all();
        return response()->json($book);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
            'location' => '',
            'acquisition_date' => 'required|date'
        ]);

        $book = Book::create($validated);

        return response()->json($book, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $books)
    {
        return response()->json($books);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $books)
    {
        //
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
            'location' => '',
            'acquisition_date' => 'required|date'
        ]);

        $books->update($validated);

        return response()->json($books);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $books)
    {
        $books->delete();

        return response()->json(['message' => 'Book has been deleted successfully!']);
    }
}
