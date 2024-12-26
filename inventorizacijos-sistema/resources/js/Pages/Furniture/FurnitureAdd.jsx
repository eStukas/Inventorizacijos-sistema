import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const FurnitureAdd = () => {
    const { data, setData, post, errors, processing } = useForm({
        type: '',
        manufacturer_provider: '',
        status: '',
        acquisition_date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('furniture.store'), {
            onSuccess: () => {
                window.location.href = route('furniture.index');
            }
        });
    };

    return (
        <div>
            <AuthenticatedLayout>

            </AuthenticatedLayout>
            <div className="container mx-auto px-4">
                <Head title="Add New Furniture" />

                <h1 className="text-3xl font-bold mb-4">Add New Furniture</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 space-y-4">
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Furniture Type</label>
                        <input
                            id="type"
                            type="text"
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.type && <div className="text-red-600 text-sm mt-1">{errors.type}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="manufacturer_provider" className="block text-sm font-medium text-gray-700">Manufacturer/Provider</label>
                        <input
                            id="manufacturer_provider"
                            type="text"
                            value={data.manufacturer_provider}
                            onChange={(e) => setData('manufacturer_provider', e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.manufacturer_provider && <div className="text-red-600 text-sm mt-1">{errors.manufacturer_provider}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            name="status"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Status</option>
                            <option value="Used">Used</option>
                            <option value="Not Used">Not Used</option>
                        </select>
                        {errors.status && <div className="text-red-600">{errors.status}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="acquisition_date" className="block text-sm font-medium text-gray-700">Acquisition Date</label>
                        <input
                            id="acquisition_date"
                            type="date"
                            value={data.acquisition_date}
                            onChange={(e) => setData('acquisition_date', e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.acquisition_date && <div className="text-red-600 text-sm mt-1">{errors.acquisition_date}</div>}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Add Furniture
                        </button>
                        <Link
                            href={route('furniture.index')}
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

export default FurnitureAdd;