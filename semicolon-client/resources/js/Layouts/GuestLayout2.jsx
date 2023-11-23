import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="bg-white text-blue p-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                    <Link href="/">
                            <img
                                src="/images/logoSemicolon.png" // Ubah sesuai dengan path yang benar
                                alt="Semicolon Logo"
                                className="h-12 w-30" // Sesuaikan ukuran gambar sesuai kebutuhan
                            />
                        </Link>
                    </div>
                    <ul className="flex space-x-6 text-xl">
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Sign Up</Link>
                        </li>
                        <li>
                            <Link href="/testing">Mental Tests</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center w-screen">
    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg" style={{ width: '100%', height: '100%', margin: '5px' }}>
        {children}
    </div>
</div>


        </div>
    );
}
