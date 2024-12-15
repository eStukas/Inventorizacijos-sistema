<?php

namespace App\Http\Controllers;

use App\Models\Office_supplies;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Manufacturer;

class OfficeSuppliesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $office_supplies = Office_supplies::with(['manufacturer'])->get();
        return Inertia::render('Office_supplies/Office_suppliesIndex', ['office_supplies' => $office_supplies]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {   
        $office_supplies = Office_supplies::all();
        $manufacturers = Manufacturer::all();

        return Inertia::render('Office_supplies/Office_suppliesAdd',[
            'office_supplies' => $office_supplies,
            'manufacturers' => $manufacturers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status' => 'required|string|max:255',
            'acquisition_date' => 'required|date'
        ]);

        $office_supplies = Office_supplies::create($validated);

        return redirect()->route('office_supplies.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Office_supplies $office_supplies)
    {
        //return response()->json($office_supplies);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Office_supplies $office_supplies)
    {
        $manufacturers = Manufacturer::all();
    
        return Inertia::render('Office_supplies/Office_suppliesEdit', [
            'office_supplies' => $office_supplies,
            'manufacturers' => $manufacturers,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Office_supplies $office_supplies)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status' => 'required|string|max:255',
            'acquisition_date' => 'required|date'
        ]);

        $office_supplies->update($validated);

        return redirect()->route('office_supplies.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Office_supplies $office_supplies)
    {
        $office_supplies->delete();

        return redirect()->route('office_supplies.index')->with('success', 'Office supplies deleted successfully.');
    }
}
