import React from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const LocationEdit = ({ location }) => {
    const { data, setData, post, errors } = useForm({
        name: location.name || '',
        type: location.type || '',
        user_id: location.user_id || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/location/edit/${location.id}`, {
            onSuccess: () => {
                console.log("Location updated successfully");
            },
        });
    };

    return (
        <div>
            <AuthenticatedLayout />
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Edit Location</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 space-y-4">
                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={`mt-1 block w-full rounded border ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                            required
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </div>

                    {/* Type Field */}
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className={`mt-1 block w-full rounded border ${
                                errors.type ? 'border-red-500' : 'border-gray-300'
                            } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                            required
                        />
                        {errors.type && <span className="text-red-500 text-sm">{errors.type}</span>}
                    </div>

                    {/* User ID Field */}
                    <div className="mb-4">
                        <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                            User ID
                        </label>
                        <input
                            type="number"
                            id="user_id"
                            value={data.user_id}
                            onChange={(e) => setData('user_id', e.target.value)}
                            className={`mt-1 block w-full rounded border ${
                                errors.user_id ? 'border-red-500' : 'border-gray-300'
                            } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {errors.user_id && <span className="text-red-500 text-sm">{errors.user_id}</span>}
                        <span className="text-gray-500 text-sm">
                            (Optional: Leave blank if no user is assigned)
                        </span>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Update Location
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LocationEdit;