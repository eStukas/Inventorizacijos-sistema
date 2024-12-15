import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const LocationIndex = ({ location }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this location?")) {
            router.delete(`/location/${id}`, {
                onSuccess: () => {
                    alert("Location deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the location:", error);
                }
            });
        }
    };

    return (
        <div>
            <Head title="Locations" />

            <AuthenticatedLayout />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Locations</h1>
                <Link
                    href="/location/create"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                >
                    Add New Location
                </Link>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">
                                    ID
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">
                                    Name
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">
                                    Type
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">
                                    User ID
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(location) && location.length > 0 ? (
                                location.map((loc) => (
                                    <tr key={loc.id} className="hover:bg-gray-100">
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                            {loc.id}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                            {loc.name}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                            {loc.type}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                            {loc.user_id || 'Unassigned'}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                            <Link
                                                href={`/location/edit/${loc.id}`}
                                                className="text-blue-500 hover:underline mr-4"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(loc.id)}
                                                className="text-red-500 hover:text-red-800 hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-6 py-4 border-b border-gray-200 text-sm text-gray-500 text-center"
                                    >
                                        No locations found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LocationIndex;