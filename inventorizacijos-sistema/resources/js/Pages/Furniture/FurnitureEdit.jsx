import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const FurnitureEdit = ({ furniture }) => {
    const { data, setData, post, errors } = useForm({
        type: furniture.type || '',
        manufacturer_provider: furniture.manufacturer_provider || '',
        status: furniture.status || '',
        acquisition_date: furniture.acquisition_date || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('furniture.update', furniture.id), {
            onSuccess: () => {
                // Redirect to the index page after successful update
                window.location.href = route('furniture.index');
            }
        });
    };

    return (
        <div>
            <AuthenticatedLayout>
                
            </AuthenticatedLayout>
            <div className="container mx-auto px-4">
                <Head title={`Edit Furniture: ${furniture.type}`} />

                <h1 className="text-3xl font-bold mb-4">Edit Furniture</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 space-y-4">
                    <div>
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

                    <div>
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

                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                        <input
                            id="status"
                            type="text"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.status && <div className="text-red-600 text-sm mt-1">{errors.status}</div>}
                    </div>

                    <div>
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

                    <div className="flex justify-between items-center">
                        <Link
                            href={route('furniture.index')}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Update Furniture
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FurnitureEdit;