import { FC, Fragment } from 'react'
import PatientsTable from '@/components/tables/PatientsTable'
import SortAndSearch from '@/components/dashboard/PatientSortAndSearch'
import BreadScrumbs from '@/components/dashboard/BreadScrumbs'
import { FaPlus } from 'react-icons/fa6'
import { BreadcrumbsPath } from '@/utils/constants'
// import Pagination from '@/components/dashboard/Pagination'

const PatientsPage: FC = () => {

    const paths:BreadcrumbsPath[] =[
        {
            id:1,
            label: 'Patients',
            path: '/dashboard/patients'
        },
        ]

    return (
        <Fragment>
            <div className='w-full h-20 flex justify-between items-center max-w-6xl mx-auto my-auto  border-b border-[#CFCFCF]'>
                <div className="text-[#2A2A2A]"><BreadScrumbs pathArray={paths}/></div>
                <div className="flex justify-center items-center gap-4">
                    <button className="px-8 py-2 bg-[#1F5AF4] text-white font-semibold flex justify-center items-center gap-x-2"><FaPlus className='text-white font-bold' />Add Patient</button>
                </div>
            </div>
            <SortAndSearch />
            <div className="w-full bg-white px-[46px] py-[31px]">
                <PatientsTable />
                {/* <Pagination itemsPerPage={10}/> */}
            </div>
        </Fragment>
    )
}

export default PatientsPage
