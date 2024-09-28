'use client'
import { DriverProfileTabs } from '@/utils/constants'
import { FC, useState } from 'react'
import PatientInfoForm from '../forms/PatientInfoForm'
import DeliveryInfoForm from '../forms/DeliveryInfoForm';

const RiderProfile: FC = () => {

    const [tabIndex, setTabIndex] = useState<number>(0)

    // get the tab index
    const handleTabClick = (index: number) => {
        setTabIndex(index)
    }

    const returnProperContent = ()=>{
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

            <div className="flex justify-between items-center gap-x-10">
                <div className="flex justify-start items-center gap-x-4 w-1/3"><span>Payment status</span><button style={{
                    background: "rgba(1, 168, 90, 0.2)"
                }} className="py-2 px-4 text-[#01A85A]">Paid</button>
                </div>
                <div className="flex justify-between items-center  w-full">
                    {DriverProfileTabs.map((tab, index) => (
                        <button key={tab.id} onClick={() => handleTabClick(index)} className={tabIndex === index ? "bg-[rgba(39, 109, 247, 0.1)] w-full py-2 text-[#276DF7] text-center px-2 border-b-2 border-[#276DF7] " : "bg-white w-full py-2 text-black text-center px-8 border-none"}>{tab.label}</button>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                {returnProperContent()}
            </div>

        </div>
    )
}

export default RiderProfile
