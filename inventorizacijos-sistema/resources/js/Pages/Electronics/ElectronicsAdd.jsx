import React, { useState } from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ElectronicsAdd = ({ manufacturers, locations }) => {
    const { data, setData, post, processing, errors } = useForm({
        inv_code: '',
        type: '',
        manufacturer_id: '',
        status: '',
        location_id: '',
        manufacture_date: '',
        acquisition_date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('electronics.store'));
    };

    return (
        <AuthenticatedLayout>
            <div className="container mx-auto px-4">
                <Head title="Add Electronics" />

                <h1 className="text-3xl font-bold mb-4">Add New Electronics</h1>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
                    <div className="mb-4">
                        <label htmlFor="inv_code" className="block text-sm font-medium text-gray-700">
                            Inventory Code
                        </label>
                        <input
                            type="text"
                            id="inv_code"
                            value={data.inv_code}
                            onChange={(e) => setData('inv_code', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.inv_code && <p className="text-red-600 text-sm mt-1">{errors.inv_code}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.type && <p className="text-red-600 text-sm mt-1">{errors.type}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="manufacturer_id" className="block text-sm font-medium text-gray-700">
                            Manufacturer
                        </label>
                        <select
                            id="manufacturer_id"
                            value={data.manufacturer_id}
                            onChange={(e) => setData('manufacturer_id', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">Select Manufacturer</option>
                            {manufacturers.map((manufacturer) => (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                    {manufacturer.name}
                                </option>
                            ))}
                        </select>
                        {errors.manufacturer_id && (
                            <p className="text-red-600 text-sm mt-1">{errors.manufacturer_id}</p>
                        )}
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
                        <label htmlFor="location_id" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <select
                            id="location_id"
                            value={data.location_id}
                            onChange={(e) => setData('location_id', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">Select Location</option>
                            {locations.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                        {errors.location_id && <p className="text-red-600 text-sm mt-1">{errors.location_id}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="manufacture_date" className="block text-sm font-medium text-gray-700">
                            Manufacture Date
                        </label>
                        <input
                            type="date"
                            id="manufacture_date"
                            value={data.manufacture_date}
                            onChange={(e) => setData('manufacture_date', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.manufacture_date && (
                            <p className="text-red-600 text-sm mt-1">{errors.manufacture_date}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="acquisition_date" className="block text-sm font-medium text-gray-700">
                            Acquisition Date
                        </label>
                        <input
                            type="date"
                            id="acquisition_date"
                            value={data.acquisition_date}
                            onChange={(e) => setData('acquisition_date', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.acquisition_date && (
                            <p className="text-red-600 text-sm mt-1">{errors.acquisition_date}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Add Electronics
                        </button>
                        <Link
                            href={route('electronics.index')}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>

    );
};

export default ElectronicsAdd;