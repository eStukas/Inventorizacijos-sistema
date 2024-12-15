import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ManufacturerEdit = ({ manufacturer }) => {
    // Form state and handler
    const { data, setData, post, errors } = useForm({
        name: manufacturer.name || "",
        email: manufacturer.email || "",
        contact_number: manufacturer.contact_number || "",
    });

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("manufacturer.update", manufacturer.id), {
            onSuccess: () => {
                // Redirect handled in the controller after success
            },
        });
    };

    return (
        <div>
            <AuthenticatedLayout>
            </AuthenticatedLayout>

            <div className="container mx-auto px-4">
                <Head title="Edit Manufacturer" />

                <h1 className="text-3xl font-bold mb-4">Edit Manufacturer</h1>

                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
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

                    {/* Email Field */}
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

                    {/* Contact Number Field */}
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

                    {/* Submit Button */}
                    <div className="mt-6 text-right">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-700"
                        >
                            Update Manufacturer
                        </button>
                    </div>
                </form>

                {/* Cancel Button */}
                <div className="mt-4">
                    <Link
                        href={route("manufacturer.index")}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManufacturerEdit;