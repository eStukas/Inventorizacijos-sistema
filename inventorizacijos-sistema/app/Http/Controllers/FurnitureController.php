<?php

namespace App\Http\Controllers;

use App\Models\Furniture;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FurnitureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $furniture = Furniture::all();
        return Inertia::render('Furniture/FurnitureIndex', ['furniture' => $furniture]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Furniture/FurnitureAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'manufacturer_provider' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'acquisition_date' => 'required|date'
        ]);

        $furniture = Furniture::create($validated);

        return Inertia::render('Furniture/FurnitureIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Furniture $furniture)
    {
        //return response()->json($furniture);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Furniture $furniture)
    {
        return Inertia::render('Furniture/FurnitureEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Furniture $furniture)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'manufacturer_provider' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'acquisition_date' => 'required|date'
        ]);

        // Update the furniture item
        $furniture->update($validated);

        // Return the updated furniture as JSON
        return Inertia::render('Furniture/FurnitureIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Furniture $furniture)
    {
        $furniture->delete();

        return redirect()->route('furniture.index')->with('success', 'Furniture deleted successfully.');
    }
}
