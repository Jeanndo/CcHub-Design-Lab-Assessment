import BreadScrumbs from '@/components/dashboard/BreadScrumbs'
import DeliveriesTable from '@/components/tables/DeliveriesTable'
import DeliveryTabs from '@/components/Tabs/DeliveryTabs'
import { BreadcrumbsPath } from '@/utils/constants'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Deliveriespage = () => {

  const paths: BreadcrumbsPath[] = [
    {
      id: 1,
      label: 'Deliveries',
      path: '/dashboard/deliveries'
    },
  ]

  return (
    <div>
      <div className='w-full h-20 flex justify-center lg:justify-between items-center max-w-6xl mx-auto my-auto  border-b border-[#CFCFCF]'>
        <div className="text-[#2A2A2A] hidden lg:block"><BreadScrumbs pathArray={paths} /></div>
        <div className="flex justify-center items-center gap-4">
          <button className="px-8 py-2 bg-[#1F5AF4] text-white font-semibold flex justify-center items-center gap-x-2"><FaPlus className='text-white font-bold' />Start New Delivry</button>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="hidden lg:block w-1/5"></div>
        <div className="px-4 w-full md:w-10/12 md:pl-10">
          <div className="w-full flex justify-between mt-10">
            <div className="flex justify-center gap-x-2">
              <div className="text-[#262626] text-opacity-80 hidden md:block">Sort By</div>
              <form>
                <select className="bg-gray-50 border-none text-gray-900 text-sm font-bold focus:outline-none  block w-max">
                  <option value="recent">Most Recent</option>
                </select>
              </form>
            </div>
            <div>
              <form className="">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className=" w-full p-2 ps-10 text-sm text-gray-900 border bg-gray-50 focus:outline-none" placeholder="Search by package code" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col mt-10 gap-4 lg:flex-row">
        <div className="w-full lg:w-1/5 ">
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
