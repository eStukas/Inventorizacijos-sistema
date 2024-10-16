<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $location = Location::all();
        return Inertia::render('Location/LocationIndex', ['location' => $location]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Location/LocationAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
            
        ]);

        $location = Location::create($validated);

        return Inertia::render('Location/LocationIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Location $locations)
    {
        //return response()->json($locations);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Location $locations)
    {
        return Inertia::render('Location/LocationEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Location $locations)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'user_id' => 'required|exists:users,id',
            
        ]);

        $locations->update($validated);

        return Inertia::render('Location/LocationIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Location $locations)
    {
        $locations->delete();

        return redirect()->route('location.index')->with('success', 'Location deleted successfully.');
    }
}
