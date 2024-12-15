import React, { useState, useEffect } from "react";
import { Head, useForm, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const BooksAdd = ({ locations }) => {
    const { data, setData, post, processing, errors } = useForm({
        type: "",
        author: "",
        status: "",
        release_date: "",
        location_id: "",
        acquisition_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("book.store"));
    };

    return (
        <div>

            <AuthenticatedLayout>
                
            </AuthenticatedLayout>
            <Head title="Add New Book" />
           

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Add New Book</h1>

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
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.author && <div className="text-red-600">{errors.author}</div>}
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
                            Release Date
                        </label>
                        <input
                            type="date"
                            name="release_date"
                            value={data.release_date}
                            onChange={(e) => setData("release_date", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {errors.release_date && (
                            <div className="text-red-600">{errors.release_date}</div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <select
                            name="location_id"
                            value={data.location_id}
                            onChange={(e) => setData("location_id", e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Location</option>
                            {locations.map((location) => (
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            ))}
                        </select>
                        {errors.location_id && (
                            <div className="text-red-600">{errors.location_id}</div>
                        )}
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
                        Add Book
                    </button>
                    <Link
                        href={route('book.index')}
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

export default BooksAdd;