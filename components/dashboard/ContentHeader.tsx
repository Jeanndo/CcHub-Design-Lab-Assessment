import { FC } from 'react'
import BreadScrumbs from './BreadScrumbs'

const ContentHeader: FC = () => {
    return (
        <div className='w-full h-20 flex justify-between items-center max-w-6xl mx-auto my-auto  border-b border-[#CFCFCF]'>
            <div className="text-[#2A2A2A]"><BreadScrumbs/></div>
            <div className="flex justify-center items-center gap-4">
                <span className="text-[#2A2A2A]">Action message</span>
                <button className="px-8 py-2 bg-[#1F5AF4] text-white font-semibold">+ Add Patient</button>
            </div>
        </div>
    )
}

export default ContentHeader
