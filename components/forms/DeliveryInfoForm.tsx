import React, { FC } from 'react'
import { Form, Formik, FormikHelpers } from "formik"
import { deliveryInfoSchama } from '@/utils/ValidationSchemas'
import { DeliveryInfoFormValues } from '@/utils/constants'
import CustomInput from '../customInput/CustomInput'
import { RiEdit2Fill } from 'react-icons/ri'
import { useResponsive } from '@/hooks/useResponsive'

const DeliveryInfoForm: FC = () => {

    const {smallDevice} = useResponsive()
    const handleSubmit = (values: DeliveryInfoFormValues, actions: FormikHelpers<DeliveryInfoFormValues>) => {
        console.log(values)
        console.log(actions)
    }

    return (
        <div className="flex flex-col gap-4 justify-between md:flex-row">
            <div className="flex flex-row justify-between items-center md:flex-col md:justify-normal md:items-baseline md:gap-y-4">
                <div>
                    <h3>Delivery Information</h3>
                    <p className="text-[#262626] text-opacity-50 hidden md:block">Information about delivery status</p>
                </div>
                <div>
                    <button className="border border-[#1F5AF4] bg-opacity-40 py-1 md:py-2 px-2 md:px-6 text-[#1F5AF4] flex justify-center items-center gap-1"><RiEdit2Fill /><span>{smallDevice?"Edit":"Edit Delivery Information"} </span></button>
                </div>

            </div>
            <Formik
                initialValues={{
                    nextDeliveryDate: "14th November 2020",
                    deliveryArea: "Yaba, Lagos",
                    deliveryAddress: "19, Mohammed Abiola street, Akoka, Lagos",
                    paymentStatus: "Paid"
                }}
                validationSchema={deliveryInfoSchama}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="mb-4">
                            <CustomInput
                                label='Next Delivery Date'
                                name="nextDeliveryDate"
                                type="text"
                                placeholder="Next Delivery Date"
                                showlabel={true}
                                disabled
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                label='Delivery Area'
                                name="deliveryArea"
                                type="text"
                                placeholder="Delivery Area"
                                showlabel={true}
                                disabled
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                label='Delivery Address'
                                name="deliveryAddress"
                                type="text"
                                placeholder="Delivery Address"
                                showlabel={true}
                                disabled
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 gap-4">
                            <div>
                                <CustomInput
                                    label='Payment Status'
                                    name="paymentStatus"
                                    type="text"
                                    placeholder="Payment Status"
                                    showlabel={true}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <button disabled className=" bg-[#1F5AF4] bg-opacity-40 py-4 px-8 text-white">Save Changes</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DeliveryInfoForm