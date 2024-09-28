'use client'
import { ViewPatientSideBarTabs } from '@/utils/constants'
import { FC, useState } from 'react'

interface ViewPatientSideBarProps {
    setGetTab: React.Dispatch<React.SetStateAction<number>>
}

const ViewPatientSideBar: FC<ViewPatientSideBarProps> = ({ setGetTab }) => {

    const [tabIndex, setTabIndex] = useState<number>(0)

    // get the tab index

    const handleTabClick = (index: number) => {
        setTabIndex(index)
        setGetTab(index)
    }

    return (
        <div className="flex flex-col">
            {ViewPatientSideBarTabs.map((tab, index) => (
                <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[#276cf713] w-full py-2 text-[#276DF7] text-left px-8 border-r-4 border-[#276DF7] font-bold" : "bg-white w-full py-2 text-black text-left px-8"}>{tab.label}</button>
            ))}
        </div>
    )
}

export default ViewPatientSideBar
