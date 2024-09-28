import { FC } from 'react'
import Search from './Search'
import SortPatient from './SortPatient'

const SortAndSearch: FC = () => {
    return (
        <div className='w-full h-20 flex justify-between items-center'>
            <div className="text-[#2A2A2A] flex justify-center items-center gap-2"><span>Sort by</span> <SortPatient/></div>
            <div className="">
                <Search/>
            </div>
        </div>
    )
}

export default SortAndSearch
