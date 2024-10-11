<?php

namespace App\Http\Controllers;

use App\Models\Electronics;
use Illuminate\Http\Request;

class ElectronicsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $electronics = Electronics::all();
        return response()->json($electronics);
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
            'inv_code' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'manufacturers' => '',
            'status' => 'required|string|max:255',
            'location' => '',
            'manufacture_date' => 'required|date',
            'acquisition_date' => 'required|date'
        ]);

        $electronics = Electronics::create($validated);

        return response()->json($electronics, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Electronics $electronics)
    {
        return response()->json($electronics);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Electronics $electronics)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Electronics $electronics)
    {
        $validated = $request->validate([
            'inv_code' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'manufacturers' => '',
            'status' => 'required|string|max:255',
            'location' => '',
            'manufacture_date' => 'required|date',
            'acquisition_date' => 'required|date'
        ]);

        $electronics->update($validated);

        return response()->json($electronics);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Electronics $electronics)
    {
        $electronics->delete();

        return response()->json(['message' => 'Electronics have been deleted successfully!']);
    }
}
