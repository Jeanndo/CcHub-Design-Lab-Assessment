import { FC } from 'react'
import DrugCircleCard from '../Cards/DrugCircleCard'
import { drugCircleData } from '@/utils/constants'

interface Props{
    onDone:()=>void
}

const SetDrugCircleContent:FC<Props> = ({onDone}) => {
    return (
        <div className="w-full">
            <p className="mb-4">Oluwaseun Aregbesola has a drug cycle of two(2) months</p>
            <div className="flex flex-col gap-y-4">
            {drugCircleData.slice(0,2).map((cycle)=>(
                <DrugCircleCard 
                    key={cycle.id} 
                    title={cycle.title}
                    content={cycle.content}
                />
            ))}
            </div>
        </div>
    )
}

export default SetDrugCircleContent
