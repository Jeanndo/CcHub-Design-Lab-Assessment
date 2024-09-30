import { FC } from 'react'
import { DeliveryData} from '@/utils/constants'

const DeliveriesTable:FC = () => {

    return (
        <table className="table-auto w-full  text-left">
            <thead className="h-[91px] font-normal text-[#2a2a2a93] border-b border-[#262626] border-opacity-10">
                <tr>
                    <th>Package Code</th>
                    <th>Delivery Date</th>
                    <th>Patient&rsquo;s Name</th>
                    <th>Phone Number</th>
                    <th>Location</th>
                    <th>&nbsp;&nbsp;&nbsp;</th>
                </tr>
            </thead>
            <tbody className="text-[#2a2a2aad]">
                {DeliveryData.map((delivery) => (
                    <tr className="h-[91px] border-b border-[#262626] border-opacity-10" key={delivery.packageCode}>
                        <td>{delivery.packageCode}</td>
                        <td>{delivery.DeliveryDate}</td>
                        <td>{delivery.patientName}</td>
                        <td>{delivery.phone}</td>
                        <td>{delivery.location}</td>
                        <td><button className="px-4 py-2 text-sm bg-white font-bold border border-[#276cf757] text-[#276DF7]">View</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DeliveriesTable