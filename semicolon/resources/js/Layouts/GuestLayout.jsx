import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
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
                            <Link href="/test">Mental Test</Link>
                        </li>
                        <li>
                            <Link href="/counseling">Counseling</Link>
                        </li>
                        <li>
                            <Link href="/register">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="absolute top-20 left-1/3 transform -translate-x-1/2 text-center">
                <p className="text-3xl font-bold italic">Have You Find Reasons to Smile Today ^_^</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="hidden sm:flex flex-1">
                    <div style={{ width: '630px', height: '400px', overflow: 'hidden', position: 'absolute', top: '62%', left: '33%', transform: 'translate(-50%, -50%)', borderRadius: '50%' }}>
                        <img
                            src="https://pict.sindonews.net/dyn/850/pena/news/2020/11/09/166/224816/5-zodiak-menggemaskan-yang-bikin-semua-orang-tersenyum-ckd.jpg"
                            alt="Semicolon"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                </div><div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg" style={{ width: '500px', height: '480px', margin: '20px' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
