'use client';
import { useState } from 'react';
import { BsBag } from 'react-icons/bs';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { name: 'হোম', href: '#' },
        { name: 'ডেমো', href: '#' },
        { name: 'ফিচারসমূহ', href: '#' },
        { name: 'মূল্য পরিকল্পনা', href: '#' },
        { name: 'লাইফ টাইম প্লান', href: '#' },
        { name: 'যোগাযোগ', href: '#' },
        { name: 'ব্লগ', href: '#' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">


                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#5A2CFF' }}>
                            <BsBag className="text-lg" />
                        </div>
                        <span className="text-xl font-bold text-gray-800 tracking-tight">Ecomtara</span>
                    </div>


                    <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium transition hover:text-[#5A2CFF]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>


                    <div className="hidden md:block">
                        <button
                            className="text-white px-5 py-2 rounded-lg font-semibold shadow-md transition hover:opacity-90"
                            style={{ backgroundColor: '#5A2CFF' }}
                        >
                            ডেমো দেখুন
                        </button>
                    </div>


                    <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>


                {mobileOpen && (
                    <div className="md:hidden bg-white border-t py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-gray-700 hover:text-[#5A2CFF] hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2 px-3">
                            <button
                                className="w-full text-white py-2 rounded-lg font-medium hover:opacity-90"
                                style={{ backgroundColor: '#5A2CFF' }}
                            >
                                ডেমো দেখুন
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}