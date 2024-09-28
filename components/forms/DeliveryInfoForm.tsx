import React, { FC } from 'react'
import { Form, Formik, FormikHelpers } from "formik"
import { deliveryInfoSchama } from '@/utils/ValidationSchemas'
import { DeliveryInfoFormValues } from '@/utils/constants'
import CustomInput from '../customInput/CustomInput'
import { RiEdit2Fill } from 'react-icons/ri'

const DeliveryInfoForm: FC = () => {

    const handleSubmit = (values: DeliveryInfoFormValues, actions: FormikHelpers<DeliveryInfoFormValues>) => {
        console.log(values)
        console.log(actions)
    }

    return (
        <div className="flex justify-between items-center">
            <div>
                <h3>Delivery Information</h3>
                <p>Information about delivery status</p>
                <button className="border border-[#1F5AF4] bg-opacity-40 py-2 px-6 text-[#1F5AF4] flex justify-center items-center gap-1"><RiEdit2Fill /><span>Edit Delivery Information</span></button>
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
                                name="nextDeliveryDate"
                                type="text"
                                placeholder="Next Delivery Date"
                            />
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="deliveryArea"
                                type="text"
                                placeholder="Delivery Area"
                            />
                        </div>
                        <div className="mb-4"> 
                            <CustomInput
                                name="deliveryAddress"
                                type="text"
                                placeholder="Delivery Address"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 mb-4 gap-4">
                            <div>
                                <CustomInput
                                    name="paymentStatus"
                                    type="text"
                                    placeholder="Payment Status"
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <button className=" bg-[#1F5AF4] py-4 px-8 text-white">Save Changes</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DeliveryInfoForm