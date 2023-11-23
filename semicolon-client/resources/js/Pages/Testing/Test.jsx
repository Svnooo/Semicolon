import { Link } from '@inertiajs/react';
import React from 'react';

export default function Test() {
    return (
            <div className="min-h-screen bg-gray-200">
                <div className="bg-white text-blue p-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">
                            <span className="text-3xl black">Semi</span>
                            <span className="text-3xl text-green-500">Colon</span>
                        </div>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/test/mbti">MBTI Test</Link>
                            </li>
                            <li>
                                <Link href="/test/stress">Stress Test</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute top-20 left-1/3 transform -translate-x-1/2 text-center">
                    <p className="text-3xl font-bold italic">Have You Find Reasons to Smile Today ^_^</p>
                </div>
                <div className="flex items-center justify-center">
                    {/* Your content for the Mental Test menu goes here */}
                </div>
            </div>    
    );
}
