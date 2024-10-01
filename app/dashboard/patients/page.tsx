/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client'
import { FC, Fragment, useState } from 'react'
import PatientsTable from '@/components/tables/PatientsTable'
import SortAndSearch from '@/components/dashboard/PatientSortAndSearch'
import BreadScrumbs from '@/components/dashboard/BreadScrumbs'
import { FaPlus } from 'react-icons/fa6'
import { BreadcrumbsPath, Patient } from '@/utils/constants'
import Pagination from '@/components/dashboard/Pagination'
import { usePatient } from '@/hooks/usePatient'

const PatientsPage: FC = () => {

    const {patients} = usePatient()
    const [currentItems, setCurrentItems] = useState<Patient[]>([]);

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
                <PatientsTable data={currentItems}/>
                <Pagination patients={patients} setCurrentItems={setCurrentItems}/>
            </div>
        </Fragment>
    )
}

export default PatientsPage
