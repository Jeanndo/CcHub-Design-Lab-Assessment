'use client'
import { FC } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { usePatient } from '@/hooks/usePatient';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface AssignPackageModalProps {
    open: boolean;
    handleClose: () => void;

}
const AssignPackageModal:FC<AssignPackageModalProps> =({open,handleClose})=>{

    const {qrCode} = usePatient()
    const router = useRouter()

    const handleAssignPackageCode = ()=>{
        router.push("/dashboard/deliveries")
        toast.success("Package has been successfully assigned to Oluwaseun Aregbesola",
            {
                className: 'custom-toast',
                bodyClassName: 'custom-toast-body',
                position: 'top-center',
            }
        )
    }

    return (
        <Dialog open={open} onClose={handleClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden  bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white  pb-4 pt-5 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <div className="border-b border-[#EEEEEE] py-4">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Assign Package {qrCode}
                                    </DialogTitle>
                                    </div>
                                    <div className="mt-2 p-8">
                                        <p className="text-sm text-gray-500">
                                        Are you sure you want to assign
                                        package <span className="font-semibold">{qrCode}</span> to <span className="font-semibold">Oluwaseun Aregbesola</span>? 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 flex justify-center items-center gap-x-4 border-t border-[#EEEEEE]">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="inline-flex w-full justify-center  border border-[#1F5AF4] px-4 py-3 text-sm font-semibold text-[#1F5AF4] shadow-sm sm:ml-3 sm:w-auto"
                            >
                                No, Go Back
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={handleAssignPackageCode}
                                className="mt-3 inline-flex w-full justify-center  bg-[#1F5AF4] px-4 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
                            >
                                Yes, Assign Package
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}


export default AssignPackageModal;