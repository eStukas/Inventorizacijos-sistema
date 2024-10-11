<?php

namespace App\Http\Controllers;

use App\Models\Software;
use Illuminate\Http\Request;

class SoftwareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $software = Software::all();
        return response()->json($software);
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
            'software_type_id' => '',
            'manufacturer_id' => '',
            'status_id' => '',
            'purchase_date' => 'required|date',
            'valid_until' => 'required|date',
            'amount' => 'required|integer'
        ]);

        $software = Software::create($validated);

        return response()->json($software, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Software $software)
    {
        return response()->json($software);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Software $software)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Software $software)
    {
        $validated = $request->validate([
            'software_type_id' => '',
            'manufacturer_id' => '',
            'status_id' => '',
            'purchase_date' => 'required|date',
            'valid_until' => 'required|date',
            'amount' => 'required|integer'
        ]);

        $software->update($validated);

        return response()->json($software);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Software $software)
    {
        $software->delete();

        return response()->json(['message' => 'Software has been deleted successfully!']);
    }
}
