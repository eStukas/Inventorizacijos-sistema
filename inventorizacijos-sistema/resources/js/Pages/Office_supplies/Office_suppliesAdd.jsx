import React from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const OfficeSuppliesAdd = ({ manufacturers }) => {
    const { data, setData, post, processing, errors } = useForm({
        type: "",
        manufacturer_id: "",
        status: "",
        acquisition_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("office_supplies.store"));
    };

    return (
        <div>
            <AuthenticatedLayout />
            <Head title="Add New Office Supply" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Add New Office Supply</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <input
                            type="text"
                            name="type"
                            value={data.type}
                            onChange={(e) => setData("type", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.type && <div className="text-red-600">{errors.type}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Manufacturer
                        </label>
                        <select
                            name="manufacturer_id"
                            value={data.manufacturer_id}
                            onChange={(e) => setData("manufacturer_id", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Manufacturer</option>
                            {manufacturers.map((manufacturer) => (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                    {manufacturer.name}
                                </option>
                            ))}
                        </select>
                        {errors.manufacturer_id && (
                            <div className="text-red-600">{errors.manufacturer_id}</div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <input
                            type="text"
                            name="status"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.status && <div className="text-red-600">{errors.status}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Acquisition Date
                        </label>
                        <input
                            type="date"
                            name="acquisition_date"
                            value={data.acquisition_date}
                            onChange={(e) => setData("acquisition_date", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.acquisition_date && (
                            <div className="text-red-600">{errors.acquisition_date}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Add Office Supply
                        </button>
                        <Link
                            href={route('office_supplies.index')}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OfficeSuppliesAdd;