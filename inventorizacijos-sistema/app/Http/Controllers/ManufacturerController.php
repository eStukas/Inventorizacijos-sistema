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
        $manufacturers = Manufacturer::all();
        return Inertia::render('Manufacturer/ManufacturerIndex', ['manufacturer' => $manufacturers]);
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
            'contact_number' => 'required|int'
        ]);

        $manufacturer = Manufacturer::create($validated);

        return redirect()->route('manufacturer.index');
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
    public function edit(Manufacturer $manufacturer)
    {
        return Inertia::render('Manufacturer/ManufacturerEdit', [
            'manufacturer' => $manufacturer
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Manufacturer $manufacturer)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'contact_number' => 'required|string|max:255'
        ]);
    
        $manufacturer->update($validated);
    
        return redirect()->route('manufacturer.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manufacturer $manufacturer)
    {
        $manufacturer->delete();

        return redirect()->route('manufacturer.index');
    }
}
