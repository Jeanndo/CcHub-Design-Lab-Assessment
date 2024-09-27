import { FC } from 'react'
import Search from './Search'

const SortAndSearch: FC = () => {
    return (
        <div className='w-full h-20 flex justify-between items-center'>
            <div className="text-[#2A2A2A]">Sort by Hospital ID</div>
            <div className="">
                <Search/>
            </div>
        </div>
    )
}

export default SortAndSearch
