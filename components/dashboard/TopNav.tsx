'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');
    const [tabPosition, setTabPosition] = useState({ width: 0, left: 0 });
    const navRef = useRef<HTMLDivElement | null>(null);

    // Update the bottom border position and width based on the active tab
    useEffect(() => {
        const activeTabElement = document.querySelector(`[data-tab="${activeTab}"]`);
        if (activeTabElement && navRef.current) {
            const navRect = navRef.current.getBoundingClientRect();
            const tabRect = (activeTabElement as HTMLElement).getBoundingClientRect();
            setTabPosition({
                width: tabRect.width,
                left: tabRect.left - navRect.left,
            });
        }
    }, [activeTab]);

    return (
        <nav className="bg-white shadow-md relative">
            <div
                ref={navRef}
                className="container mx-auto px-4 py-4 flex items-center justify-between"
            >
                {/* Logo on the left */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-xl font-bold text-gray-900">
                        Logo
                    </Link>
                </div>

                {/* Hamburger icon for mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-900 focus:outline-none"
                    >
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                        </svg>
                    </button>
                </div>

                {/* Centered nav links for larger screens */}
                <div className="hidden md:flex space-x-8 relative">
                    <NavLink href="/" label="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <NavLink href="/about" label="About" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <NavLink href="/services" label="Services" activeTab={activeTab} setActiveTab={setActiveTab} />
                    <NavLink href="/contact" label="Contact" activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                {/* Profile on the right */}
                <div className="flex-shrink-0 hidden md:block">
                    <span className="text-gray-700 font-medium">John Doe</span>
                </div>
            </div>

            {/* Active border on the entire nav container */}
            <div
                className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300"
                style={{
                    width: `${tabPosition.width}px`,
                    left: `${tabPosition.left}px`,
                }}
            />

            {/* Mobile Modal Nav */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
                    <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg transition-transform transform translate-x-0">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-900"
                        >
                            {/* Close Icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="flex flex-col items-start p-8 space-y-6">
                            <NavLink href="/" label="Home" mobile />
                            <NavLink href="/about" label="About" mobile />
                            <NavLink href="/services" label="Services" mobile />
                            <NavLink href="/contact" label="Contact" mobile />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({
    href,
    label,
    activeTab,
    setActiveTab,
    mobile,
}: {
    href: string;
    label: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    mobile?: boolean;
}) => {
    const isActive = activeTab === label;
    return (
        <a
            href={href}
            data-tab={label}
            onClick={() => setActiveTab(label)}
            className={`relative py-2 cursor-pointer text-gray-700 ${isActive ? 'text-blue-600' : 'hover:text-blue-600'
                } transition-colors duration-300`}
        >
            {label}
        </a>
    );
};

export default Navbar;
