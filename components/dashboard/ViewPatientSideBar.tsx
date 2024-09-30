'use client'
import { useResponsive } from '@/hooks/useResponsive'
import { ViewPatientSideBarTabs, ViewPatientSideBarTabsSmallDevices } from '@/utils/constants'
import { FC, Fragment, useState } from 'react'

interface ViewPatientSideBarProps {
    setGetTab: React.Dispatch<React.SetStateAction<number>>
}

const ViewPatientSideBar: FC<ViewPatientSideBarProps> = ({ setGetTab }) => {
    const { smallDevice } = useResponsive()
    const [tabIndex, setTabIndex] = useState<number>(0)
    // get the tab index

    const handleTabClick = (index: number) => {
        setTabIndex(index)
        setGetTab(index)
    }

    return (
        <Fragment>
            {smallDevice ? <div className="flex flex-row md:flex-col">
                {ViewPatientSideBarTabsSmallDevices.map((tab, index) => (
                    <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[#276cf713] w-full py-2 text-[#276DF7] text-left px-4 md:px-8 border-b-4 md:border-b-0 md:border-r-4 border-[#276DF7] font-bold" : "bg-white w-full py-2 text-black text-left px-4 md:px-8"}>{tab.label}</button>
                ))}
            </div> :
                <div className="flex flex-row md:flex-col">
                    {ViewPatientSideBarTabs.map((tab, index) => (
                        <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[#276cf713] w-full py-2 text-[#276DF7] text-left px-4 md:px-8 border-b-4 md:border-b-0 md:border-r-4 border-[#276DF7] font-bold" : "bg-white w-full py-2 text-black text-left px-4 md:px-8"}>{tab.label}</button>
                    ))}
                </div>}
        </Fragment>
    )
}

export default ViewPatientSideBar
