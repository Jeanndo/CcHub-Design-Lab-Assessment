'use client'
import { DriverProfileTabs, DriverProfileTabsSmallDevices } from '@/utils/constants'
import { FC, useState } from 'react'
import PatientInfoForm from '../forms/PatientInfoForm'
import DeliveryInfoForm from '../forms/DeliveryInfoForm'
import { useResponsive } from '@/hooks/useResponsive'

const RiderProfile: FC = () => {

    const { smallDevice } = useResponsive()
    const [tabIndex, setTabIndex] = useState<number>(0)

    // get the tab index
    const handleTabClick = (index: number) => {
        setTabIndex(index)
    }

    const returnProperContent = () => {
        switch (tabIndex) {
            case 0:
                return <PatientInfoForm />
            case 1:
                return <DeliveryInfoForm />
            default:
                return <PatientInfoForm />
        }
    }
    return (
        <div className="w-full flex flex-col py-4 px-4">

            <div className="flex justify-between items-center gap-4 md:gap-x-10">
                <div className="flex flex-col justify-normal md:flex-row md:justify-start md:items-center gap-x-4 w-1/3"><span>{smallDevice? "Status":"Payment status"}</span><button style={{
                    background: "rgba(1, 168, 90, 0.2)"
                }} className={smallDevice?"py-1 px-2 text-[#01A85A]":"py-2 px-4 text-[#01A85A]"}>Paid</button>
                </div>

                {smallDevice ? (
                    <div className="flex justify-between items-center  w-full">
                        {DriverProfileTabsSmallDevices.map((tab, index) => (
                            <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[rgba(39, 109, 247, 0.1)] w-full py-2 text-[#276DF7] text-center px-2 border-b-2 border-[#276DF7] " : "bg-white w-full py-2 text-black text-center px-8 border-none"}>{tab.label}</button>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-between items-center  w-full">
                        {DriverProfileTabs.map((tab, index) => (
                            <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[rgba(39, 109, 247, 0.1)] w-full py-2 text-[#276DF7] text-center px-2 border-b-2 border-[#276DF7] " : "bg-white w-full py-2 text-black text-center px-8 border-none"}>{tab.label}</button>
                        ))}
                    </div>
                )
                }
            </div>

            <div className="mt-10">
                {returnProperContent()}
            </div>

        </div>
    )
}

export default RiderProfile
