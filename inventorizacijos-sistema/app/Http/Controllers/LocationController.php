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
            'user_id' => 'nullable|exists:users,id',
            
        ]);

        $location = Location::create($validated);

        return redirect()->route('location.index');
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
    public function edit(Location $location)
    {
        return Inertia::render('Location/LocationEdit', [
            'location' => $location, // Pass the location to the view
        ]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Location $location)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'user_id' => 'nullable|exists:users,id',
        ]);
    
        $location->update($validated);
    
        return redirect()->route('location.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Location $location)
    {
        $location->delete();

        return redirect()->route('location.index');
    }
}
