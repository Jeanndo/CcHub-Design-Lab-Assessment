'use client'
import { FC, useEffect, useState } from 'react'
import DeliveryHistory from '@/components/dashboard/DeliveryHistory'
import Patient from '@/components/dashboard/Patient'
import RiderProfile from '@/components/dashboard/RiderProfile'
import ViewPatientSideBar from '@/components/dashboard/ViewPatientSideBar'
import BreadScrumbs from '@/components/dashboard/BreadScrumbs'
import { usePatient } from '@/hooks/usePatient'
import { useResponsive } from '@/hooks/useResponsive'
import { useRouter } from 'next/navigation'
import { BreadcrumbsPath, IDProp } from '@/utils/constants'

const ViewPatient: FC<IDProp> = ({ params }) => {

    const router = useRouter()

    const {smallDevice} = useResponsive()
    const {setPatientId} = usePatient()
    const [getTab, setGetTab] = useState<number>(0)

    useEffect(()=>{
        setPatientId(params.patientId)
    },[params.patientId,setPatientId])

    const getProperConent = () => {

        switch (getTab) {
            case 0:
                return <Patient/>
            case 1:
                return <RiderProfile/>
            case 2:
                return <DeliveryHistory/>
            default:
                return <Patient/>
        }
    }

    const handleAssignment = ()=>{
        router.push(`/dashboard/patients/assign/${params.patientId}`)
    }

    const paths:BreadcrumbsPath[] =[
        {
            id:1,
            label: 'Patients',
            path: '/dashboard/patients'
        },
        {
            id:2,
            label: 'View Patient',
            path: `/dashboard/patients/${params.patientId}`
        },
        ]
    
    return (
        <div>
            <div className='w-full h-20 flex justify-center md:justify-between items-center max-w-6xl mx-auto my-auto  border-b border-[#CFCFCF] md:px-4 lg:px-0'>
                <div className="text-[#2A2A2A] hidden md:block"><BreadScrumbs pathArray={paths}/></div>
                <div className="flex justify-center items-center gap-2 md:gap-4">
                    <div>
                    <span className="text-[#2A2A2A] text-[12px] md:text-sm">Patient’s next delivery date is <br/>
                    <span className="font-semibold text-[10px] md:text-sm">14th November 2020, in 2 days</span></span>
                    </div>
                    <button onClick={handleAssignment} className="px-2 py-2 md:px-8 md:py-2 bg-[#1F5AF4] text-white font-semibold">{smallDevice?"Assign Package": "Assign Package to Patient"}</button>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row mt-10 gap-4">
                <div className="w-full md:w-1/5">
                    <ViewPatientSideBar setGetTab={setGetTab} />
                </div>
                <div className="flex-grow bg-white text-black">
                    {getProperConent()}
                </div>
            </div>
        </div>
    )
}

export default ViewPatient
