import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/moment';

export default function TVIndex({ tvs }) {
    return (

        <AuthenticatedLayout>
            <Head title="TVs" />

            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-4">TVs</h1>

                <Link
                    href={route('tv.create')}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
                >
                    Add New TV
                </Link>

                <table className="min-w-full bg-white border border-gray-200 shadow-md">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">IP Address</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Last Ping</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tvs.map((tv) => (
                            <tr key={tv.id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{tv.id}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{tv.name}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{tv.ip_address}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{tv.last_ping}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{(tv.last_ping ? (moment().diff(moment(tv.last_ping), 'minutes') > 1 ? `Offline (last online ${moment(tv.last_ping).format('YYYY-MM-DD HH:mm:ss')})` : 'Online') : 'Signal not received yet')}</td>

                                {/* <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">{"placeholder for status"}</td> */}
                                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                                    <Link
                                        href={route('tv.edit', tv.id)}
                                        className="text-blue-500 hover:underline mr-4"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route('tv.delete', tv.id)}
                                        method="get"
                                        className="text-red-500 hover:underline"
                                        as="button"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}