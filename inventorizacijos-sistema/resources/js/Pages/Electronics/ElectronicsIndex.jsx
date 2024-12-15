import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ElectronicsIndex = ({ electronics, manufacturers }) => {

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete chosen electronics?")) {
            router.delete(`/electronics/${id}`, {
                onSuccess: () => {
                    alert("Electronics deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the electronics:", error);
                }
            });
        }
    };
    return (


        <div>
            <AuthenticatedLayout>

            </AuthenticatedLayout>
            <div className="container mx-auto px-4">
                <Head title="Electronics Inventory" />

                <h1 className="text-3xl font-bold mb-4">Electronics Inventory</h1>

                <div className="mb-4">
                    <Link
                        href={route('electronics.create')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        Add New Electronics
                    </Link>
                </div>

                <table className="min-w-full bg-white shadow-md rounded-md">
                    <thead>
                        <tr className="">
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Inventory Code</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Manufacturer</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Location</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Manufacture Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Acquisition Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {electronics.map((electronic) => (
                            <tr key={electronic.id} className="border-t">
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{electronic.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{electronic.inv_code}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{electronic.type}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    {electronic.manufacturer?.name || "N/A"}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{electronic.status}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    {electronic.location?.name || "N/A"}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{electronic.manufacture_date}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{electronic.acquisition_date}</td>
                                <td className="py-3 px-4 flex space-x-2">
                                    <Link
                                        href={route('electronics.edit', electronic.id)}
                                        className="text-blue-600 hover:text-blue-800 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(electronic.id)}
                                        className="text-red-500 hover:text-red-800 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ElectronicsIndex;