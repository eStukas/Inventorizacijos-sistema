import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div>
            <div className="custom-navbar bg-gray-800 text-white p-4 flex space-x-4">
                <img
                    src="/images/kitm_logo_v1.png"
                    alt="KITM LOGO"
                    className="NavbarLogo h-[30px]"
                />
                <Link
                    href={route("dashboard")}
                    className="RightSideButton transition ease-in-out my-auto"
                >
                    Dashboard
                </Link>
                <div className="RightSideButtons w-[100%] h-[100%] relative flex justify-end my-auto pr-2">
                    <Link
                        href={route("profile.edit")}
                        className="RightSideButton w-[50px] mr-4 hover:scale-110 transition"
                    >
                        Profile
                    </Link>
                        <Link
                            href={route('logout')}
                            method='post'
                            as='button'
                            className='RightSideButton w-[60px] inline hover:scale-110'
                        >
                        Log Out
                        </Link>
                </div>
            </div>

            {children}
        </div>
    );
}
