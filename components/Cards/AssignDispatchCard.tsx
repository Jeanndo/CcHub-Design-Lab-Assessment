import { FC } from 'react'

interface CardProps{
    title: string,
    content: string,
    // buttonText: string,
    // onClick: () => void
}

const AssignDispatchCard:FC = () => {

    return (
        <div className="w-full border border-[#E0E0E0] p-4">
            <div className="flex justify-between items-center">
                <div className="">o</div>
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