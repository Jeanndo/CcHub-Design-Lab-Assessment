'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import UserProfile from './UserProfile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClose = ()=>{
        setIsOpen(false)
    }
    return (
        <nav className="border-b border-[#cfcfcf9d]  flex justify-between items-center w-full bg-white  h-[75px] px-4 md:px-32">
            <div><Image src="/assets/images/NIMR-logo.svg" alt="nimr logo" width={50} height={50} /></div>

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

            <ul className="hidden xl:flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="me-2">
                    <Link href="/dashboard" className={pathname === "/dashboard" ? "inline-flex items-center justify-center p-4 border-b-2 border-[#276DF7] rounded-t-lg text-[#276DF7] hover:border-[#276DF7]  group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#276DF7] hover:border-[#276DF7]  group"}>
                        <svg className={pathname === "/dashboard" ? "w-4 h-10 me-2 text-[#276DF7] group-hover:text-[#276DF7]" : "w-4 h-10 me-2 text-gray-400 group-hover:text-[#276DF7]"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M0 3.55556C0 1.59188 1.59188 0 3.55556 0C5.51924 0 7.11111 1.59188 7.11111 3.55556C7.11111 5.51924 5.51924 7.11111 3.55556 7.11111C1.59188 7.11111 0 5.51924 0 3.55556ZM0 12.4444C0 10.4808 1.59188 8.88889 3.55556 8.88889C5.51924 8.88889 7.11111 10.4808 7.11111 12.4444C7.11111 14.4081 5.51924 16 3.55556 16C1.59188 16 0 14.4081 0 12.4444ZM8.88889 3.55556C8.88889 1.59188 10.4808 0 12.4444 0C14.4081 0 16 1.59188 16 3.55556C16 5.51924 14.4081 7.11111 12.4444 7.11111C10.4808 7.11111 8.88889 5.51924 8.88889 3.55556ZM8.88889 12.4444C8.88889 10.4808 10.4808 8.88889 12.4444 8.88889C14.4081 8.88889 16 10.4808 16 12.4444C16 14.4081 14.4081 16 12.4444 16C10.4808 16 8.88889 14.4081 8.88889 12.4444Z" />
                        </svg>

                        Overview
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/dashboard/deliveries" className={pathname === "/dashboard/deliveries" ? "inline-flex items-center justify-center p-4 border-b-2 border-[#276DF7] rounded-t-lg text-[#276DF7] hover:border-[#276DF7] group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#276DF7] hover:border-[#276DF7] group"}>
                        <svg className={pathname === "/dashboard/deliveries" ? "w-4 h-10 me-2 text-[#276DF7] group-hover:text-[#276DF7]" : "w-4 h-10 me-2 text-gray-400 group-hover:text-[#276DF7]"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.793 6.0956L15.8994 11.8445C16.0986 12.598 15.9997 13.3986 15.6232 14.0819C15.2467 14.7653 14.621 15.2794 13.8747 15.5189C13.1284 15.7583 12.3182 15.7048 11.6104 15.3693C10.9025 15.0339 10.3509 14.4419 10.0688 13.7151H6.80712C6.63278 14.3838 6.23501 14.974 5.67896 15.3888C5.1229 15.8037 4.44151 16.0187 3.74636 15.9987C3.05121 15.9787 2.3835 15.7248 1.85256 15.2787C1.32162 14.8325 0.958918 14.2205 0.82385 13.5429C0.575261 13.4139 0.367024 13.2197 0.221774 12.9814C0.0765242 12.7431 -0.000179632 12.4698 3.15891e-07 12.1912V4.5717C3.15891e-07 4.36962 0.080818 4.17582 0.224674 4.03292C0.368531 3.89003 0.563642 3.80975 0.767086 3.80975H6.13669C6.34013 3.80975 6.53524 3.89003 6.6791 4.03292C6.82295 4.17582 6.90377 4.36962 6.90377 4.5717V8.38146C6.90377 8.58354 6.98459 8.77734 7.12845 8.92024C7.2723 9.06313 7.46741 9.14341 7.67086 9.14341H9.20503C9.40847 9.14341 9.60358 9.06313 9.74744 8.92024C9.8913 8.77734 9.97211 8.58354 9.97211 8.38146V1.5239H7.67086V0H10.7392C10.9426 0 11.1378 0.0802767 11.2816 0.22317C11.4255 0.366064 11.5063 0.559869 11.5063 0.761951V1.5239H15.3417V6.0956H13.793ZM14.4703 12.3985C14.3273 12.0217 14.0401 11.7165 13.6713 11.5494C13.3025 11.3824 12.8821 11.3671 12.502 11.5069C12.1219 11.6467 11.8129 11.9302 11.6426 12.2956C11.4723 12.6609 11.4544 13.0784 11.5929 13.4568C11.7315 13.8351 12.0151 14.1437 12.3819 14.315C12.7487 14.4863 13.1688 14.5065 13.5506 14.3711C13.9323 14.2358 14.2446 13.9558 14.4192 13.5925C14.5939 13.2292 14.6166 12.8119 14.4826 12.432L14.4703 12.3985ZM1.53417 6.85755H5.3696V5.33365H1.53417V6.85755ZM11.5063 4.5717H13.8075V3.0478H11.5063V4.5717ZM3.83543 14.4771C4.24232 14.4771 4.63254 14.3165 4.92025 14.0307C5.20796 13.7449 5.3696 13.3573 5.3696 12.9532C5.3696 12.549 5.20796 12.1614 4.92025 11.8756C4.63254 11.5898 4.24232 11.4293 3.83543 11.4293C3.42854 11.4293 3.03832 11.5898 2.75061 11.8756C2.46289 12.1614 2.30126 12.549 2.30126 12.9532C2.30126 13.3573 2.46289 13.7449 2.75061 14.0307C3.03832 14.3165 3.42854 14.4771 3.83543 14.4771Z" fill="#CDCCD6" />
                        </svg>
                        Deliveries
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/dashboard/patients" className={pathname === "/dashboard/patients" ? "inline-flex items-center justify-center p-4 border-b-2 border-[#276DF7] rounded-t-lg text-[#276DF7] hover:border-[#276DF7] group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#276DF7] hover:border-[#276DF7] group"}>
                        <svg className={pathname === "/dashboard/patients" ? "w-4 h-10 me-2 text-[#276DF7] group-hover:text-[#276DF7]" : "w-4 h-10 me-2 text-gray-400 group-hover:text-[#276DF7]"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        Patients
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/dashboard/dispatch" className={pathname === "/dashboard/dispatch" ? "inline-flex items-center justify-center p-4 border-b-2 border-[#276DF7] rounded-t-lg text-[#276DF7] hover:border-[#276DF7] group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#276DF7] hover:border-[#276DF7] group"}>
                        <svg className={pathname === "/dashboard/dispatch" ? "w-4 h-10 me-2 text-[#276DF7] group-hover:text-[#276DF7]" : "w-4 h-10 me-2 text-gray-400 group-hover:text-[#276DF7]"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.63623 4.31625C8.41037 4.76294 9.0532 5.40565 9.50004 6.1797C9.94688 6.95376 10.182 7.83185 10.1816 8.72562V14.5437H7.14896C6.99871 14.9695 6.72007 15.3383 6.35145 15.5991C5.98283 15.8599 5.54238 16 5.09082 16C4.63925 16 4.1988 15.8599 3.83019 15.5991C3.46157 15.3383 3.18293 14.9695 3.03267 14.5437H3.39144e-07V8.72562C-0.000325925 7.83185 0.234759 6.95376 0.681599 6.1797C1.12844 5.40565 1.77127 4.76294 2.54541 4.31625C2.42591 4.10161 2.33426 3.87262 2.27269 3.6348H3.39144e-07V2.18028H2.27341C2.43518 1.55612 2.79964 1.00334 3.30957 0.608729C3.8195 0.214113 4.44603 0 5.09082 0C5.7356 0 6.36214 0.214113 6.87207 0.608729C7.382 1.00334 7.74645 1.55612 7.90822 2.18028H10.1816V3.6348H7.90822C7.8464 3.8748 7.75404 4.10389 7.63695 4.31625H7.63623ZM5.09082 9.45288C4.89794 9.45288 4.71296 9.5295 4.57657 9.66589C4.44018 9.80228 4.36356 9.98726 4.36356 10.1801V13.8164C4.36356 14.0093 4.44018 14.1943 4.57657 14.3307C4.71296 14.4671 4.89794 14.5437 5.09082 14.5437C5.2837 14.5437 5.46868 14.4671 5.60507 14.3307C5.74146 14.1943 5.81808 14.0093 5.81808 13.8164V10.1801C5.81808 9.98726 5.74146 9.80228 5.60507 9.66589C5.46868 9.5295 5.2837 9.45288 5.09082 9.45288ZM5.09082 4.36206C5.47658 4.36206 5.84654 4.20882 6.11932 3.93604C6.39209 3.66327 6.54534 3.29331 6.54534 2.90754C6.54534 2.52178 6.39209 2.15182 6.11932 1.87904C5.84654 1.60627 5.47658 1.45302 5.09082 1.45302C4.70506 1.45302 4.33509 1.60627 4.06232 1.87904C3.78954 2.15182 3.6363 2.52178 3.6363 2.90754C3.6363 3.29331 3.78954 3.66327 4.06232 3.93604C4.33509 4.20882 4.70506 4.36206 5.09082 4.36206Z" />
                        </svg>

                        Dispatch Riders
                    </Link>
                </li>
                <li className="me-2">
                    <Link href="/dashboard/admin" className={pathname === "/dashboard/admin" ? "inline-flex items-center justify-center p-4 border-b-2 border-[#276DF7] rounded-t-lg text-[#276DF7] hover:border-[#276DF7]  group" : "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#276DF7] hover:border-[#276DF7]  group"}>
                        <svg className={pathname === "/dashboard/admin" ? "w-4 h-10 me-2 text-[#276DF7] group-hover:text-[#276DF7]" : "w-4 h-10 me-2 text-gray-400 group-hover:text-[#276DF7]"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        Admin
                    </Link>
                </li>
            </ul>
            <div className="hidden md:block">
            <UserProfile />
            </div>

            {/* Mobile Modal Nav */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
                    <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg transition-transform transform translate-x-0">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-900"
                        >
                            {/* Close Icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div className="flex flex-col items-start p-8 space-y-6">
                            <Link href="/dashboard" className="text-black" onClick={handleClose}>Overview</Link>
                            <Link href="/dashboard/deliveries" className="text-black" onClick={handleClose}>Deliveries</Link>
                            <Link href="/dashboard/patients" className="text-black" onClick={handleClose}>Patient</Link>
                            <Link href="/dashboard/dispatch" className="text-black" onClick={handleClose}>Dispatch</Link>
                            <Link href="/dashboard/admin" className="text-black" onClick={handleClose}>Admin</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Header
