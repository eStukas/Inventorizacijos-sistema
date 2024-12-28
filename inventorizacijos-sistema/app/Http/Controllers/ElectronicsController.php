<?php

namespace App\Http\Controllers;

use App\Models\Electronics;
use App\Models\Location;
use App\Models\Manufacturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ElectronicsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $electronics = Electronics::with(['manufacturer', 'location'])->get();
        return Inertia::render('Electronics/ElectronicsIndex', ['electronics' => $electronics]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $manufacturers = Manufacturer::all();
        $locations = Location::all();

        return Inertia::render('Electronics/ElectronicsAdd', [
            'manufacturers' => $manufacturers,
            'locations' => $locations,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'inv_code' => 'required|alpha_num|max:255',
            'type' => 'required|alpha_num|max:255',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status' => 'required|max:255',
            'location_id' => 'required|exists:locations,id',
            'manufacture_date' => 'required|date',
            'acquisition_date' => 'required|date'
        ]);

        $electronics = Electronics::create($validated);

        return redirect()->route('electronics.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Electronics $electronics)
    {
        $manufacturers = Manufacturer::all();
        $locations = Location::all();

        return Inertia::render('Electronics/ElectronicsEdit', [
            'electronics' => $electronics,
            'manufacturers' => $manufacturers,
            'locations' => $locations,
        ]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Electronics $electronics)
    {
        $validated = $request->validate([
            'inv_code' => 'required|alpha_num|max:255',
            'type' => 'required|alpha_num|max:255',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status' => 'required|max:255',
            'location_id' => 'required|exists:locations,id',
            'manufacture_date' => 'required|date',
            'acquisition_date' => 'required|date'
        ]);

        $electronics->update($validated);

        return redirect()->route('electronics.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Electronics $electronics)
    {
        $electronics->delete();
        return redirect()->route('electronics.index');
    }
}
