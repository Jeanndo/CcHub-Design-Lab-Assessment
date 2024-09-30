import { FC, useState } from 'react'
import CardRadioButton from '../common/CardRadioButton'

interface CardProps{
    title: string,
    content: string,
}

const DrugCycleCard:FC<CardProps> = ({title,content}) => {
    const [isSelected,setIsSelected] = useState<boolean>(false)

    const handleTab=()=>{
        setIsSelected(true)
    }

    return (
        <div className="flex flex-col w-full border border-[#276DF7]">
                <CardRadioButton showBackgroundColor={true} showborder={true} hasLable={true} label={title} isSelected={isSelected} handleSelect={handleTab}/>
            <div className="p-4">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default DrugCycleCard