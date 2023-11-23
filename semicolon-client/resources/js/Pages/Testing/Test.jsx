import { Link } from '@inertiajs/react';
import React from 'react';
import GuestLayout2 from '@/Layouts/GuestLayout2';

export default function Test() {
    return (
        <GuestLayout2>
            <div className="p-4 h-w-screen">
                <div className="mx-auto flex space-x-40 h-full">
                    <Link href="/test/mbti">
                        <div className="bg-green-200 p-8 cursor-pointer h-full">
                            <p className="font-bold">MBTI Test</p>
                        </div>
                    </Link>
                    <Link href="/test/stress">
                        <div className="bg-yellow-200 p-8 cursor-pointer h-full">
                            <p className="font-bold">Stress Test</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1">
                {/* Your content for the Mental Test menu goes here */}
            </div>
        </GuestLayout2>
    );
}
