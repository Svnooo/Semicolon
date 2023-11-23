import { Link } from '@inertiajs/react';
export default function Navbar({ auth }) {
    return (
        <nav className="bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    href="/dashboard"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Mental Test
                                </Link>

                                <Link
                                    href="/mental-test"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Counseling
                                </Link>

                                <Link
                                    href="/counseling"
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                {/* Your notification icon or content goes here */}
                            </button>

                            {/* Add more items or components here, such as user profile, logout button, etc. */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
