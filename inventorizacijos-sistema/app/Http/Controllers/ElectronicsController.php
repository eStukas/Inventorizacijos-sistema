<?php

namespace App\Http\Controllers;

use App\Models\Electronics;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ElectronicsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $electronics = Electronics::all();
        return Inertia::render('Electronics/ElectronicsIndex', ['electronics' => $electronics]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Electronics/ElectronicsAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'inv_code' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status' => 'required|string|max:255',
            'location_id' => 'required|exists:locations,id',
            'manufacture_date' => 'required|date',
            'acquisition_date' => 'required|date'
        ]);

        $electronics = Electronics::create($validated);

        return Inertia::render('Electronics/ElectronicsIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Electronics $electronics)
    {
        //return response()->json($electronics);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Electronics $electronics)
    {
        return Inertia::render('Electronics/ElectronicsEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Electronics $electronics)
    {
        $validated = $request->validate([
            'inv_code' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status' => 'required|string|max:255',
            'location_id' => 'required|exists:locations,id',
            'manufacture_date' => 'required|date',
            'acquisition_date' => 'required|date'
        ]);

        $electronics->update($validated);

        return Inertia::render('Electronics/ElectronicsIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Electronics $electronics)
    {
        $electronics->delete();

        return redirect()->route('electronics.index')->with('success', 'Electronics deleted successfully.');
    }
}
