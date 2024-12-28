<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TV;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class TVController extends Controller
{
    public function index()
    {
        $tvs = TV::all();
        return Inertia::render('TVs/TVIndex', compact('tvs'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('TVs/TVAdd');
    }
    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'ip_address' => 'required|string|max:255',
            'last_ping' => 'nullable|date'
        ]);

        // Add `last_ping` explicitly as null if not provided
        if (!$request->has('last_ping')) {
            $validated['last_ping'] = null;
        }

        TV::create($validated);

        return redirect()->route('tv.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TV $tv)
    {   
       
        return Inertia::render('TVs/TVEdit', ['tv' => $tv]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TV $tv)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'ip_address' => 'required|string|max:255',
            'last_ping' => 'nullable|date'

        ]);

        $tv->update($validated);

        return redirect()->route('tv.index');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TV $id)
    {

        $id->delete();

        return redirect()->route('tv.index');
    }


    public function ping(TV $tv)
    {
        $tv->last_ping = now('Europe/Vilnius');
        $tv->save();

    
    }
}
