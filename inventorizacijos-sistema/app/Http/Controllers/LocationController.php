<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $location = Location::all();
        return response()->json($location);
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
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'user' => 'required|exists:users,id',
            
        ]);

        $location = Location::create($validated);

        return response()->json($location, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Location $locations)
    {
        return response()->json($locations);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Location $locations)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Location $locations)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'user' => 'required|exists:users,id',
            
        ]);

        $locations->update($validated);

        return response()->json($locations);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Location $locations)
    {
        $locations->delete();

        return response()->json(['message' => 'Locations have been deleted successfully!']);
    }
}
