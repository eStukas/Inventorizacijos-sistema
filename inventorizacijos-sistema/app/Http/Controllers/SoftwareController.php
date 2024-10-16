<?php

namespace App\Http\Controllers;

use App\Models\Software;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SoftwareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $software = Software::all();
        return Inertia::render('Software/SoftwareIndex', ['software' => $software]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Software/SoftwareAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'software_type_id' => 'required|exists:software_types,id',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status_id' => 'required|exists:statuses,id',
            'purchase_date' => 'required|date',
            'valid_until' => 'required|date',
            'amount' => 'required|integer'
        ]);

        $software = Software::create($validated);

        return Inertia::render('Software/SoftwareIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Software $software)
    {
        //return response()->json($software);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Software $software)
    {
        return Inertia::render('Software/SoftwareEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Software $software)
    {
        $validated = $request->validate([
            'software_type_id' => 'required|exists:software_types,id',
            'manufacturer_id' => 'required|exists:manufacturers,id',
            'status_id' => 'required|exists:statuses,id',
            'purchase_date' => 'required|date',
            'valid_until' => 'required|date',
            'amount' => 'required|integer'
        ]);

        $software->update($validated);

        return Inertia::render('Software/SoftwareIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Software $software)
    {
        $software->delete();

        return redirect()->route('software.index')->with('success', 'Software deleted successfully.');
    }
}
