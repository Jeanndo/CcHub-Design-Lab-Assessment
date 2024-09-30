import { BreadcrumbsPath } from '@/utils/constants';
import Link from 'next/link';
import { FC } from 'react'

interface BreadScrumbsProps{
    pathArray:BreadcrumbsPath[];
}

const BreadScrumbs:FC<BreadScrumbsProps> = ({pathArray}) => {
    return (
        <nav className="flex font-bold" aria-label="Breadcrumb">
            <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {pathArray?.map((item)=>(
                    <li className="inline-flex items-center" key={item.id}>
                    <Link href={item.path} className="inline-flex items-center font-medium text-[#2A2A2A] hover:text-[#1F5AF4]">
                        /{item.label}
                    </Link>
                </li>
                ))
                }
            </ul>
        </nav>
    )
}

export default BreadScrumbs
