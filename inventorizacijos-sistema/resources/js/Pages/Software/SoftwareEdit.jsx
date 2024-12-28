import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function SoftwareEdit({ software, softwareTypes, manufacturers, statuses }) {
    const { data, setData, put, processing, errors } = useForm({
        software_type_id: software.software_type_id,
        manufacturer_id: software.manufacturer_id,
        status_id: software.status_id,
        purchase_date: software.purchase_date,
        valid_until: software.valid_until,
        amount: software.amount,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('software.update', software.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Software" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">Edit Software</h1>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <div className="mb-4">
                        <label htmlFor="software_type_id" className="block text-sm font-medium text-gray-700">
                            Software Type
                        </label>
                        <select
                            id="software_type_id"
                            value={data.software_type_id}
                            onChange={(e) => setData('software_type_id', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                        >
                            <option value="">Select a type</option>
                            {softwareTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                        {errors.software_type_id && (
                            <div className="text-red-500 text-sm mt-1">{errors.software_type_id}</div>
                        )}
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
                        <label htmlFor="status_id" className="block text-sm font-medium text-gray-700">
                            Status
                        </label>
                        <select
                            id="status_id"
                            value={data.status_id}
                            onChange={(e) => setData('status_id', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                            <option value="">Select Status</option>
                            {statuses.map((status) => (
                                <option key={status.id} value={status.id}>
                                    {status.name}
                                </option>
                            ))}
                        </select>
                        {errors.status_id && (
                            <p className="text-red-600 text-sm mt-1">{errors.status_id}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="purchase_date" className="block text-sm font-medium text-gray-700">
                            Purchase Date
                        </label>
                        <input
                            type="date"
                            id="purchase_date"
                            value={data.purchase_date}
                            onChange={(e) => setData('purchase_date', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.purchase_date && <p className="text-red-600 text-sm mt-1">{errors.purchase_date}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="valid_until" className="block text-sm font-medium text-gray-700">
                            Valid Until
                        </label>
                        <input
                            type="date"
                            id="valid_until"
                            value={data.valid_until}
                            onChange={(e) => setData('valid_until', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.valid_until && (
                            <p className="text-red-600 text-sm mt-1">{errors.valid_until}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            value={data.amount}
                            onChange={(e) => setData('amount', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                        {errors.amount && <p className="text-red-600 text-sm mt-1">{errors.amount}</p>}
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
                            href={route('software.index')}
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