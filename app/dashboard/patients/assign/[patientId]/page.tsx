import AssignPackageTabs from '@/components/dashboard/AssignPackageTabs'
import { FC } from 'react'

const AssignPackage: FC = () => {

    return (
        <div className='flex justify-between  gap-x-8 mt-10 text-black min-h-screen'>
            <div className="w-1/2 bg-white h-max">
                <div className="py-3 border-b border-[#EFEFEF] px-4">
                    <h2>Patient Information</h2>
                </div>
                <div className="p-4 flex flex-col gap-y-8 text-sm">
                    <div className="flex justify-between"><span className="text-[#2a2a2a91]">Hospital ID</span><span className="text-[#2A2A2A]">1AFHFH093</span></div>
                    <div className="flex justify-between"><span className="text-[#2a2a2a91]">Name</span><span className="text-[#2A2A2A]">Oluwaseun Aregbesola</span></div>
                    <div className="flex justify-between"><span className="text-[#2a2a2a91]">Phone Number</span><span className="text-[#2A2A2A]">+2347068642920</span></div>
                    <div className="flex justify-between"><span className="text-[#2a2a2a91]">Next Delivery Date</span><span className="text-[#2A2A2A]">12th September 2020</span></div>
                    <div className="flex justify-between"><span className="text-[#2a2a2a91]">Location</span><span className="text-[#2A2A2A]">Yaba, Lagos</span></div>
                </div>
            </div>
            <div className="bg-white h-max w-full">
                <div className="w-full  p-4 border-b border-[#EFEFEF]">
                    <AssignPackageTabs />
                </div>
                <div className="flex justify-end my-2 p-4">
                    <button className="py-3 px-5 bg-[#1F5AF4] text-white">Next</button>
                </div>
            </div>
        </div>
    )
}

export default AssignPackage
