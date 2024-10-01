/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client'
import {FC} from 'react'
import PatientStatusLable from '../common/PatientStatusLable'
import { useRouter } from 'next/navigation'
import { Patient } from '@/utils/constants'

type PatientData ={
    data:Patient
}
const PatientsTable:FC<PatientData> = ({data}) => {

    const router =  useRouter()

    const handleViewPatient = (id:string)=>{
        router.push(`/dashboard/patients/${id}`)
    }
    
    return (
        <div className="overflow-x-auto">
        <table className="whitespace-nowrap w-full text-left">
            <thead className="h-[91px] font-normal text-[#2a2a2a93] border-b border-[#262626] border-opacity-10">
                <tr>
                    <th>Hospital ID</th>
                    <th>Patient&rsquo;s Name</th>
                    <th>Phone Number</th>
                    <th>Next Delivery Date</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>&nbsp;&nbsp;&nbsp;</th>
                </tr>
            </thead>
            <tbody className="text-[#2a2a2aad]">
                {data?.map((patient)=>(
                    <tr className="h-[91px] border-b border-[#262626] border-opacity-10" key={patient.hospitalId}>
                    <td>{patient.hospitalId}</td>
                    <td>{patient.name}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.nextDeliveryData}</td>
                    <td>{patient.location}</td>
                    <td><PatientStatusLable status={patient.status}/></td>
                    <td><button onClick={()=>handleViewPatient(patient.hospitalId)} className="px-4 py-2 text-sm bg-white font-bold border border-[#276cf757] text-[#276DF7]">View</button></td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default PatientsTable
