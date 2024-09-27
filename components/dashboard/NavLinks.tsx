'use client'
import Link from 'next/link';
import { FC} from 'react'
import { BsGridFill } from "react-icons/bs";
import { RiEBike2Line } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { usePathname } from 'next/navigation'

const NavLinks: FC = () => {
    
    const pathname = usePathname()
    
    return (
        <ul className="flex justify-between items-center gap-[43px]">
            <li className={pathname==="/dashboard"?"text-[#276DF7] list-none font-bold":"text-[#827F98] list-none"}><Link href="/dashboard" className="flex justify-center items-center gap-2 "><span><BsGridFill/></span><span>Overview</span></Link></li>
            <li className={pathname==="/dashboard/deliveries"?"text-[#276DF7] list-none font-bold":"text-[#827F98] list-none"}><Link href="/dashboard/deliveries" className="flex justify-center items-center gap-2"><span><RiEBike2Line/></span><span>Deliveries</span></Link></li>
            <li className={pathname==="/dashboard/patients"?"text-[#276DF7] list-none font-bold":"text-[#827F98] list-none"}><Link href="/dashboard/patients" className="flex justify-center items-center gap-2"><span><MdGroups2 className="text-xl"/></span><span>Patients</span></Link></li>
            <li className={pathname==="/dashboard/dispatch"?"text-[#276DF7] list-none font-bold":"text-[#827F98] list-none"}><Link href="/dashboard/dispatch" className="flex justify-center items-center gap-2"><span><BsGridFill/></span><span>Dispatch Riders</span></Link></li>
            <li className={pathname==="/dashboard/admin"?"text-[#276DF7] list-none font-bold":"text-[#827F98] list-none"}><Link href="/dashboard/admin" className="flex justify-center items-center gap-2"><span><BsGridFill/></span><span>Admin</span></Link></li>
        </ul>
    )
}

export default NavLinks
