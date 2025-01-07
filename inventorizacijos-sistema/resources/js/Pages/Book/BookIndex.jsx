import { Link, router } from '@inertiajs/react';
import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const BookIndex = ({ books, userRole }) => {

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this book?")) {
            router.delete(`/book/${id}`, {
                onSuccess: () => {
                    alert("Book deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the book:", error);
                }
            });
        }
    };
    return (
        <AuthenticatedLayout>
            <Head title="Books" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Books</h1>
                {userRole === 1 && (
                    <Link
                        href="/book/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                    >
                        Add New Book
                    </Link>
                )

                }


                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Author</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Release Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Location</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Acquisition Date</th>
                            {userRole === 1 && (
                                < th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{book.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{book.title}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{book.author}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{book.release_date}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{book.location?.name || 'N/A'}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{book.acquisition_date}</td>
                                {userRole === 1 && (
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                        <Link
                                            href={`/book/edit/${book.id}`}
                                            className="text-blue-500 hover:text-blue-800 hover:underline mr-4"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(book.id)}
                                            className="text-red-500 hover:text-red-800 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout >
    );
}

export default BookIndex;