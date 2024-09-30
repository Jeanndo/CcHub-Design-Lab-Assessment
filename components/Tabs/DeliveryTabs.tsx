'use client'
import { AssignedDeliveries, unassignedDeliveries} from '@/utils/constants'
import { FC, useState } from 'react'

// interface DeliveryTabsProps {
//     setGetTab: React.Dispatch<React.SetStateAction<number>>
// }

const DeliveryTabs: FC = () => {

    const [tabIndex, setTabIndex] = useState<number|null>(null)
    const [assignedTabIndex,setAssignedTabIndex] = useState<number|null>(null)
    // get the tab index

    const handleTabClick = (index: number) => {
        setTabIndex(index)
        setAssignedTabIndex(null)
        // setGetTab(index)
    }
    const handleAssignedTabClick = (index: number) => {
        setTabIndex(null)
        setAssignedTabIndex(index)
    }

    return (
        <div className="flex flex-col gap-y-10">
            <div className="bg-white">
                <div className="py-3 text-left px-8 text-[#2a2a2a] text-opacity-80 font-medium">Unassigned Deliveries</div>
                <div className="flex flex-col  border-t border-[#EFEFEF]">
                    {unassignedDeliveries.map((tab, index) => (
                        <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[#276cf713] w-full py-3 text-[#276DF7] text-left px-8 border-r-4 border-[#276DF7] font-bold flex justify-between items-center" : "bg-white w-full py-3 text-black text-left px-8 flex justify-between items-center"}>{tab.label}{tab?.value&&<span className="w-5 h-5 bg-[#F42C1F] text-white rounded-full flex justify-center items-center p-3">{tab?.value}</span>}</button>
                    ))}
                </div>
            </div>

            <div className="bg-white">
                <div className="py-3 text-left px-8 text-[#2A2A2A] text-opacity-80 font-medium">Assigned Deliveries</div>
                <div className="flex flex-col border-t border-[#EFEFEF]">
                    {AssignedDeliveries.map((tab, index) => (
                        <button key={tab.id} onClick={() => handleAssignedTabClick(index)} className={assignedTabIndex === index ? "bg-[#276cf713] w-full py-3 text-[#276DF7] text-left px-8 border-r-4 border-[#276DF7] font-bold flex justify-between items-center" : "bg-white w-full py-3 text-black text-left px-8 flex justify-between items-center"}>{tab.label}{tab?.value&&<span className="w-5 h-5 bg-[#F42C1F] text-white rounded-full flex justify-center items-center p-3">{tab?.value}</span>}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DeliveryTabs
