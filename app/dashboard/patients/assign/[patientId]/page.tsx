'use client'
import { FC, Fragment, useState } from 'react'
import AssignPackageTabs from '@/components/dashboard/AssignPackageTabs'
import AssignPackageModal from '@/components/modals/AssignPackageCodeModal'
import BreadScrumbs from '@/components/dashboard/BreadScrumbs'
import { FaPlus } from 'react-icons/fa6'
import { BreadcrumbsPath, IDProp } from '@/utils/constants'
import { usePatient } from '@/hooks/usePatient'

const AssignPackage: FC<IDProp> = ({ params }) => {

    const { drugSelected, assignSelected, scanSelected, scanDone,handleDrugTab, handleSetDrugCycleDone, handleAssignDispatchDriverDone} = usePatient()

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpenModal = () => {
        setOpen(true)
    }

    const paths: BreadcrumbsPath[] = [
        {
            id: 1,
            label: 'Patients',
            path: '/dashboard/patients',
            color:"#276DF7",
            showColor:true
        },
        {
            id: 2,
            label: '/View Patient',
            path: `/dashboard/patients/${params.patientId}`,
            color:"#276DF7",
            showColor:true
        },
        {
            id: 3,
            label: '/Assign Package to Patient',
            path: `/dashboard/patients/assign/${params.patientId}`,
            color:"#276DF7",
            showColor:false
        }
    ]

    // Return proper next button for navigation purposes

    function retunProperNextButton() {

        if (drugSelected) {
            return <button onClick={handleSetDrugCycleDone} className="py-3 px-5 bg-[#1F5AF4] text-white">Next</button>
        } else if (assignSelected) {
            return <button onClick={handleAssignDispatchDriverDone} className="py-3 px-5 bg-[#1F5AF4] text-white">Next</button>
        } 
    }



    return (
        <Fragment>
            <AssignPackageModal open={open} handleClose={handleClose} />
            <div className='w-full h-20 flex justify-center md:justify-between items-center max-w-6xl mx-auto my-auto  border-b border-[#CFCFCF]'>
                <div className="text-[#2A2A2A] hidden md:block"><BreadScrumbs pathArray={paths} /></div>
                <div className="flex justify-center items-center gap-4">
                    <button className="px-8 py-2 bg-[#1F5AF4] text-white font-semibold flex justify-center items-center gap-x-2"><FaPlus className='text-white font-bold' />Add Patient</button>
                </div>
            </div>
            <div className='flex flex-col justify-normal md:flex-row md:justify-between  gap-x-8 mt-10 text-black min-h-screen'>
                <div className="w-1/2 bg-white h-max hidden lg:block">
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
                    <div className="w-full  p-4">
                        <AssignPackageTabs />
                    </div>
                    {!scanSelected && <div className="flex justify-end my-2 p-4 shadow-top bg-white border-t border-[#EFEFEF]">
                        {retunProperNextButton()}

                    </div>}
                    {scanSelected && <div className="flex justify-between items-center p-4 shadow-top bg-white border-t border-[#EFEFEF]">
                        <button onClick={handleDrugTab}  className="py-3 px-8 border border-[#276DF7] text-[#276DF7] font-semibold">Back</button>
                        <button disabled={!scanDone} onClick={handleOpenModal} className={`py-3 px-5 bg-[#1F5AF4] ${!scanDone?"bg-opacity-40":""} text-white`}>Assign Package</button>
                    </div>}
                </div>
            </div>
        </Fragment>
    )
}

export default AssignPackage
