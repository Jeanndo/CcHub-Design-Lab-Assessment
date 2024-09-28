import React, { FC } from 'react'
import { Form, Formik, FormikHelpers } from "formik"
import { patientInfoSchama } from '@/utils/ValidationSchemas'
import { PatientInfoFormValues } from '@/utils/constants'
import CustomInput from '../customInput/CustomInput'
import CustomSelectField from '../customInput/CustomSelectField'
import { RiEdit2Fill } from 'react-icons/ri'

const PatientInfoForm: FC = () => {

    const handleSubmit = (values: PatientInfoFormValues, actions: FormikHelpers<PatientInfoFormValues>) => {
        console.log(values)
        console.log(actions)
    }

    return (
        <div className="flex justify-between items-center">
            <div>
                    <h3>Patient information</h3>
                    <p>Personal information about Patient</p>
                    <button className="border border-[#1F5AF4] bg-opacity-40 py-2 px-6 text-[#1F5AF4] flex justify-center items-center gap-1"><RiEdit2Fill/><span>Edit Patient information</span></button>
                </div>
            <Formik
                initialValues={{
                    hospitalId: "23AB456789",
                    firstName: "Oluwaseun",
                    lastName: "Aregbesola",
                    gender: "Male",
                    phone: "+2348123456789",
                    email: "seunregbesola@gmail.com"
                }}
                validationSchema={patientInfoSchama}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="mb-4">
                            <CustomInput
                                name="hospitalId"
                                type="text"
                                placeholder="Hospital ID"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
                            <div>
                                <CustomInput
                                    name="firstName"
                                    type="text"
                                    placeholder="FirstName"
                                />
                            </div>
                            <div>
                                <CustomInput
                                    name="lastName"
                                    type="text"
                                    placeholder="LastName"
                                />
                            </div>
                            <div>
                                <CustomSelectField
                                    name="gender"
                                >
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </CustomSelectField>
                            </div>
                            <div>
                                <CustomInput
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                name="email"
                                type="email"
                                placeholder="Email Address"
                            />
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

export default PatientInfoForm