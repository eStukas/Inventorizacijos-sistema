<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        logger("RoleMiddleware invoked for role: $role");

        if (Auth::check() && Auth::user()->role == $role) {
            return $next($request);
        }

        abort(403, 'Unauthorized action.');
    }
}
