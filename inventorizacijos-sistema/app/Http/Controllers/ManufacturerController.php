<?php

namespace App\Http\Controllers;

use App\Models\Manufacturer;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ManufacturerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $manufacturer = Manufacturer::all();
        return Inertia::render('Manufacturer/ManufacturerIndex', ['manufacturer' => $manufacturer]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Manufacturer/ManufacturerAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'contact_number' => 'required|string|max:255'
        ]);

        $manufacturer = Manufacturer::create($validated);

        return Inertia::render('Manufacturer/ManufacturerIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Manufacturer $manufacturers)
    {
        //return response()->json($manufacturers);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Manufacturer $manufacturers)
    {
        return Inertia::render('Manufacturer/ManufacturerEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Manufacturer $manufacturers)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'contact_number' => 'required|string|max:255'
        ]);

        $manufacturers->update($validated);

        return Inertia::render('Manufacturer/ManufacturerIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manufacturer $manufacturers)
    {
        $manufacturers->delete();

        return redirect()->route('manufacturer.index')->with('success', 'Manufacturer deleted successfully.');
    }
}
