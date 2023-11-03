import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function HeaderClient() {
    return (
        <header className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-lg">
                    {/* Logo in the top-right corner */}
                    <Link to="/" className="text-white text-2xl font-semibold">Semicolon</Link>
                </div>

                {/* Navigation links */}
                <div className="space-x-4">
                    <Link to="/mental-test" className="text-white">Mental Test</Link>
                    <Link to="/counseling" className="text-white">Counseling</Link>
                    <Link to="/logout" className="text-white">Logout</Link>
                </div>
            </div>
        </header>
    );
}
