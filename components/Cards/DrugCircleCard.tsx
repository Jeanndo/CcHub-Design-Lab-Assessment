import { FC } from 'react'

interface CardProps{
    title: string,
    content: string,
    // buttonText: string,
    // onClick: () => void
}

const DrugCycleCard:FC<CardProps> = ({title,content}) => {

    return (
        <div className="flex flex-col w-full border border-[#276DF7]">
            <div className="bg-[#276cf73f] border-b border-[#276DF7] p-4 text-[#276DF7] font-semibold">Same as initial drug cycle</div>
            <div className="p-4">
                <p>Deliver drug on 4th February 2020 & set next delivery date to 4th March 2020</p>
            </div>
        </div>
    )
}

export default DrugCycleCard