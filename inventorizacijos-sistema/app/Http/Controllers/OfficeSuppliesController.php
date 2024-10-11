<?php

namespace App\Http\Controllers;

use App\Models\Office_supplies;
use Illuminate\Http\Request;

class OfficeSuppliesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $office_supplies = Office_supplies::all();
        return response()->json($office_supplies);
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
            'manufacturer' => '',
            'status' => 'required|string|max:255',
            'acquisition_date' => 'required|date'
        ]);

        $office_supplies = Office_supplies::create($validated);

        return response()->json($office_supplies, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Office_supplies $office_supplies)
    {
        return response()->json($office_supplies);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Office_supplies $office_supplies)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Office_supplies $office_supplies)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'manufacturer' => '',
            'status' => 'required|string|max:255',
            'acquisition_date' => 'required|date'
        ]);

        $office_supplies->update($validated);

        return response()->json($office_supplies);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Office_supplies $office_supplies)
    {
        $office_supplies->delete();

        return response()->json(['message' => 'Office supplies have been deleted successfully!']);
    }
}
