<?php

namespace App\Http\Controllers;

use App\Models\Software;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Software_type;
Use App\Models\Manufacturer;
Use App\Models\Status;

class SoftwareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $software = Software::with(['software_type', 'manufacturer', 'status'])->get();
        return Inertia::render('Software/SoftwareIndex', ['software' => $software]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Software/SoftwareAdd', [
            'softwareTypes' => Software_type::all(),
            'manufacturers' => Manufacturer::all(),
            'statuses' => Status::all(),
        ]);
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

        return redirect()->route('software.index');
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
    return Inertia::render('Software/SoftwareEdit', [
        'software' => $software,
        'softwareTypes' => Software_type::all(),
        'manufacturers' => Manufacturer::all(),
        'statuses' => Status::all(),
    ]);
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

        return redirect()->route('software.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Software $software)
    {
        $software->delete();

        return redirect()->route('software.index');
    }
}
