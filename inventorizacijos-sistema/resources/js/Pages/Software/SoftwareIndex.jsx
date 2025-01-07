import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function SoftwareIndex({ software, auth }) {
    const userRole = auth.user.role;
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete chosen software?")) {
            router.delete(`/software/${id}`, {
                onSuccess: () => {
                    alert("Software deleted successfully!");
                },
                onError: (error) => {
                    console.error("Error deleting the software:", error);
                }
            });
        }
    };
    return (
        <AuthenticatedLayout>
            <Head title="Software List" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Software List</h1>
                {userRole === 1 && (
                    <Link
                        href={route('software.create')}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                    >
                        Add Software
                    </Link>
                )}

                <table className="min-w-full table-auto bg-white border border-gray-200 rounded-md shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Software Type</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Manufacturer</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Purchase Date</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Valid Until</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Amount</th>
                            {userRole === 1 && (
                                <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {software.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    {item.software_type ? item.software_type.name : 'N/A'}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    {item.manufacturer ? item.manufacturer.name : 'N/A'}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    {item.status ? (
                                        <span
                                            style={{
                                                backgroundColor: item.status.status_color || '#ccc',
                                                color: "black",
                                                padding: '2px 6px',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            {item.status.name}
                                        </span>
                                    ) : (
                                        'N/A'
                                    )}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.purchase_date || 'N/A'}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.valid_until || 'N/A'}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{item.amount || 'N/A'}</td>

                                {userRole === 1 && (
                                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                        <Link
                                            href={route('software.edit', item.id)}
                                            className="text-blue-500 hover:text-blue-800 hover:underline mr-4"
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
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}