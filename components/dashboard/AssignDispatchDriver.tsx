import { FC } from 'react'
import AssignDispatchCard from '../Cards/AssignDispatchCard'
interface Props{
    onDone:()=>void
}

const AssignDispatchDriver:FC<Props> = ({onDone}) => {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex justify-between items-center gap-x-4">
                <div className="cursor-pointer border border-[#1f5bf44f] bg-[#1f5bf423] text-[#1F5AF4] p-1">All (300)</div>
                <div className="cursor-pointer bg-[#827f9818] text-[#827F98] p-1">Yaba Riders (5)</div>
                <div className="cursor-pointer bg-[#827f9818] text-[#827F98] p-1">Unassigned Riders (10)</div>
                <div className="cursor-pointer bg-[#827f9818] text-[#827F98] p-1">Assigned Riders (23)</div>
            </div>
            {[1,2,3,4,5,6,7,8].map((item)=>(
                <AssignDispatchCard key={item}/>
            ))}
        </div>
    )
}

export default AssignDispatchDriver