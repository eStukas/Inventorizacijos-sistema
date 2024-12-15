import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <div className="h-screen flex flex-col">
            <Head title="Dashboard" />
            <AuthenticatedLayout>

            </AuthenticatedLayout>

            {/* Content Section */}
            <div className="flex-grow flex items-center justify-center DashboardBackground">
                <div className="PageButtons flex flex-col gap-6">
                    {/* First Row */}
                    <div className="PageButtonsFirstRow flex justify-center gap-6">
                        <Link href="/book" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Books
                        </Link>
                        <Link href="/electronics" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Electronics
                        </Link>
                        <Link href="/furniture" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Furniture
                        </Link>
                        <Link href="/location" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Location
                        </Link>
                    </div>

                    {/* Second Row */}
                    <div className="PageButtonsRowTwo flex justify-center gap-6">
                        <Link href="/manufacturer" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Manufacturer
                        </Link>
                        <Link href="/office_supplies" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Office Supplies
                        </Link>
                        <Link href="/software" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>Software
                        </Link>
                        <Link href="/tv-control" className="PageButton flex items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out">
                            <span></span><span></span><span></span><span></span>TV Monitoring
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}