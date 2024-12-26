import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const FurnitureIndex = ({ furniture }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this furniture?")) {
            router.delete(`/furniture/${id}`, {
                onSuccess: () => {
                    alert("Furniture deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the furniture:", error);
                }
            });
        }
    };

    return (


        <div>
            <AuthenticatedLayout>

            </AuthenticatedLayout>
            <div className="container mx-auto px-4">
                <Head title="Furniture List" />

                <h1 className="text-3xl font-bold mb-4">Furniture</h1>

                <Link
                    href="/furniture/create"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                >
                    Add New Furniture
                </Link>


                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Manufacturer/Provider</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Acquisition Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(furniture.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.type}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.manufacturer_provider}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.status}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.acquisition_date}</td>
                                <td className="px-4 py-2 text-sm">
                                    <div className="flex space-x-2">

                                        <Link
                                            href={route('furniture.edit', item.id)}
                                            className="text-blue-600 hover:text-blue-800 hover:underline"
                                        >
                                            Edit
                                        </Link>


                                        <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-500 hover:text-red-800 hover:underline"
                                    >
                                        Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>

        </div>



    );
};

export default FurnitureIndex;