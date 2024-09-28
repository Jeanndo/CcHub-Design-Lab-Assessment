import { PatientsData } from '@/utils/constants'
import {FC} from 'react'
import PatientStatusLable from '../common/PatientStatusLable'

const PatientsTable:FC = () => {
    return (
        <table className="table-auto w-full  text-left">
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
                {PatientsData.map((patient)=>(
                    <tr className="h-[91px] border-b border-[#262626] border-opacity-10" key={patient.hospitalId}>
                    <td>{patient.hospitalId}</td>
                    <td>{patient.name}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.nextDeliveryData}</td>
                    <td>{patient.location}</td>
                    <td><PatientStatusLable status={patient.status}/></td>
                    <td><button className="px-4 py-2 text-sm bg-white font-bold border border-[#276cf757] text-[#276DF7]">View</button></td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PatientsTable
