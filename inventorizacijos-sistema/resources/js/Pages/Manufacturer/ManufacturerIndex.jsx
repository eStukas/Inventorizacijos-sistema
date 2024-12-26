import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ManufacturerIndex = ({ manufacturer }) => {

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete chosen manufacturer?")) {
            router.delete(`/manufacturer/${id}`, {
                onSuccess: () => {
                    alert("Manufacturer deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the manufacturer:", error);
                }
            });
        }
    };

    return (

        <div>
            <AuthenticatedLayout>

            </AuthenticatedLayout>
            <Head title="Manufacturers" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Manufacturers</h1>

                <div className="mb-4">
                    <Link
                        href={route('manufacturer.create')}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                    >
                        Add Manufacturer
                    </Link>
                </div>
                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Contact Number</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manufacturer.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.name}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.email}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.contact_number}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    <Link
                                        href={route('manufacturer.edit', item.id)}
                                        className="text-blue-600 hover:text-blue-800 mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-500 hover:text-red-800 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>

        </div>



    );
};

export default ManufacturerIndex;