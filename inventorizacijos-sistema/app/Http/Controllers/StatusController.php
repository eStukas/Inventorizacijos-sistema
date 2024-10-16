<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = Status::all();
        return Inertia::render('Status/StatusIndex', ['status' => $status]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Status/StatusAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'notes' => 'required|string|max:255',
            'status_color' => 'required|string|max:255'
        ]);
        
        $status = Status::create($validated);

        return Inertia::render('Status/StatusIndex');
    }

    /**
     * Display the specified resource.
     */
    public function show(Status $statuses)
    {
        //return response()->json($statuses);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Status $statuses)
    {
        return Inertia::render('Status/StatusEdit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Status $statuses)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'notes' => 'required|string|max:255',
            'status_color' => 'required|string|max:255'
        ]);

        $statuses->update($validated);

        return Inertia::render('Status/StatusIndex');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Status $statuses)
    {
        $statuses->delete();

        return redirect()->route('status.index')->with('success', 'Status deleted successfully.');
    }
}
