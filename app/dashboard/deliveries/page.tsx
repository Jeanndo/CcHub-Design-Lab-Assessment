import BreadScrumbs from '@/components/dashboard/BreadScrumbs'
import SortAndSearch from '@/components/dashboard/PatientSortAndSearch'
import DeliveriesTable from '@/components/tables/DeliveriesTable'
import DeliveryTabs from '@/components/Tabs/DeliveryTabs'
import { BreadcrumbsPath } from '@/utils/constants'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Deliveriespage = () => {

  const paths:BreadcrumbsPath[] =[
    {
        id:1,
        label: 'Deliveries',
        path: '/dashboard/deliveries'
    },
    ]

  return (
    <div>
      <div className='w-full h-20 flex justify-between items-center max-w-6xl mx-auto my-auto  border-b border-[#CFCFCF]'>
        <div className="text-[#2A2A2A]"><BreadScrumbs pathArray={paths} /></div>
        <div className="flex justify-center items-center gap-4">
          <button className="px-8 py-2 bg-[#1F5AF4] text-white font-semibold flex justify-center items-center gap-x-2"><FaPlus className='text-white font-bold'/>Start New Delivry</button>
        </div>
      </div>
      <SortAndSearch />
      <div className="w-full flex mt-10 gap-4">
        <div className="w-1/5 ">
          <DeliveryTabs />
        </div>
        <div className="flex-grow bg-white text-black p-4">
          <DeliveriesTable />
        </div>
      </div>
    </div>
  )
}

export default Deliveriespage
