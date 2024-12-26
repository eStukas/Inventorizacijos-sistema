import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ManufacturersAdd = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        contact_number: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("manufacturer.store"), {
            onSuccess: () => {
                
            },
        });
    };

    return (
        <div>
            <AuthenticatedLayout>

            </AuthenticatedLayout>

            <div className="container mx-auto px-4">
                <Head title="Add Manufacturer" />

                <h1 className="text-3xl font-bold mb-4">Add Manufacturer</h1>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 space-y-4">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Manufacturer Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.name && (
                            <div className="mt-1 text-sm text-red-500">{errors.name}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && (
                            <div className="mt-1 text-sm text-red-500">{errors.email}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="contact_number"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Contact Number
                        </label>
                        <input
                            id="contact_number"
                            type="text"
                            value={data.contact_number}
                            onChange={(e) => setData("contact_number", e.target.value)}
                            className={`mt-1 block w-full px-3 py-2 border ${errors.contact_number ? "border-red-500" : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.contact_number && (
                            <div className="mt-1 text-sm text-red-500">{errors.contact_number}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Add Manufacturer
                        </button>
                        <Link
                            href={route('manufacturer.index')}
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

export default ManufacturersAdd;