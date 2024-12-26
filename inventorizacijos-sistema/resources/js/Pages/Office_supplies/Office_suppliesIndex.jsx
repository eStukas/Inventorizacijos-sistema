import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const OfficeSuppliesIndex = ({ office_supplies }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this office supply?")) {
            router.delete(`/office_supplies/${id}`, {
                onSuccess: () => {
                    alert("Office supply deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the office supply:", error);
                }
            });
        }
    };
    return (
        <div>
            <AuthenticatedLayout />

            <Head title="Office Supplies" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Office Supplies</h1>

                <div className="mb-4">
                    <Link
                        href={route('office_supplies.create')}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                    >
                        Add Office Supply
                    </Link>
                </div>

                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Manufacturer</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Acquisition Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {office_supplies.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.type}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.manufacturer?.name}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.status}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.acquisition_date}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    <Link
                                        href={route('office_supplies.edit', item.id)}
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OfficeSuppliesIndex;