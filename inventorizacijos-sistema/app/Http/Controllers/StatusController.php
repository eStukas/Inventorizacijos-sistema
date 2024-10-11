<?php

namespace App\Http\Controllers;

use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = Status::all();
        return response()->json($status);
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
            'name' => 'required|string|max:255',
            'notes' => 'required|string|max:255',
            'status_color' => 'required|string|max:255'
        ]);
        
        $status = Status::create($validated);

        return response()->json($status, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Status $statuses)
    {
        return response()->json($statuses);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Status $statuses)
    {
        //
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

        return response()->json($statuses);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Status $statuses)
    {
        $statuses->delete();

        return response()->json(['message' => 'Status has been deleted successfully!']);
    }
}
