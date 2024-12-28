import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function TVEdit({ tv }) {
    const { data, setData, put, processing, errors } = useForm({
        name: tv.name || '',
        ip_address: tv.ip_address || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('tv.update', tv.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit TV" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Edit TV</h1>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            TV Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                                errors.name ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="ip_address" className="block text-sm font-medium text-gray-700">
                            IP Address
                        </label>
                        <input
                            id="ip_address"
                            type="text"
                            value={data.ip_address}
                            onChange={(e) => setData('ip_address', e.target.value)}
                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                                errors.ip_address ? 'border-red-500' : ''
                            }`}
                        />
                        {errors.ip_address && (
                            <div className="text-red-500 text-sm mt-1">{errors.ip_address}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Save Changes
                        </button>
                        <Link
                            href={route('tv.index')}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}