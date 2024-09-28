'use client'
import { FC, useState } from 'react'
import DeliveryHistory from '@/components/dashboard/DeliveryHistory'
import Patient from '@/components/dashboard/Patient'
import RiderProfile from '@/components/dashboard/RiderProfile'
import ViewPatientSideBar from '@/components/dashboard/ViewPatientSideBar'

type Params = {
    patientId:string
}

interface ViewPatientProps{
    params:Params
}

const ViewPatient: FC<ViewPatientProps> = ({params}) => {

    const [getTab, setGetTab] = useState<number>(0)

    const getProperConent = () => {

        switch (getTab) {
            case 0:
                return <Patient />
            case 1:
                return <RiderProfile />
            case 2:
                return <DeliveryHistory />
            default:
                return <Patient />
        }
    }

    return (
        <div className="w-full flex mt-10 gap-4">
            <div className="w-1/5">
                <ViewPatientSideBar setGetTab={setGetTab} />
            </div>
            <div className="flex-grow bg-white text-black">
                {getProperConent()} {JSON.stringify(params)}
            </div>
        </div>
    )
}

export default ViewPatient
