import { FC, useState } from 'react'
import CardRadioButton from '../common/CardRadioButton'

const AssignDispatchCard:FC = () => {

    const [selected,setSelected] = useState<boolean>(false)

    const handleSelectCard = ()=>{
        setSelected((prev)=>!prev)
    }

    return (
        <div className={`w-full ${selected?"bg-[#276cf73f]":""} border border-[#E0E0E0] p-4 cursor-pointer `}onClick={handleSelectCard}>
            <div className="flex justify-between items-center">
                <div className=""><CardRadioButton showBackgroundColor={false} showborder={false} hasLable={false} isSelected={selected} handleSelect={handleSelectCard}/></div>
                <div className="flex justify-between items-center w-11/12">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-[12px]">Dispatch Rider’s Name</div>
                        <div>Emmanuel Adebayo</div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-[12px]">Delivery Area</div>
                        <div>Yaba</div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-[12px]">Number of Deliveries</div>
                        <div>20 Deliveries</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssignDispatchCard