'use client'
import { FC, useEffect, useState } from 'react'
import { Form, Formik, FormikHelpers } from "formik"
import { patientInfoSchama } from '@/utils/ValidationSchemas'
import { Patient, PatientInfoFormValues } from '@/utils/constants'
import CustomInput from '../customInput/CustomInput'
import CustomSelectField from '../customInput/CustomSelectField'
import { RiEdit2Fill } from 'react-icons/ri'
import { usePatient } from '@/hooks/usePatient'
import { useResponsive } from '@/hooks/useResponsive'
import { toast } from 'react-toastify'

const PatientInfoForm: FC = () => {

    const {smallDevice} = useResponsive()
    const { patientId, getPatient,setEditPatientInfo,editPatientInfo} = usePatient()
    const [patientInfo, setPatientInfo] = useState<Patient | undefined>()

    const defaultPatient: PatientInfoFormValues = {
        hospitalId: patientInfo ? patientInfo?.hospitalId : "17AFHFH093",
        firstName: patientInfo ? patientInfo?.firstName : "Oluwaseun",
        lastName: patientInfo ? patientInfo?.lastName : "Aregbesola",
        gender: patientInfo ? patientInfo?.gender : "Male",
        phone: patientInfo ? patientInfo.phone : "+2348123456789",
        email: patientInfo ? patientInfo.email : "seunregbesola@gmail.com",
    };

    const handleSubmit = (values: PatientInfoFormValues, actions: FormikHelpers<PatientInfoFormValues>) => {

        console.log(values)
        console.log(actions)
        toast.success("Updated successfully")
        setEditPatientInfo(false)
    }

    useEffect(() => {
        const patient = getPatient(patientId)
        if (patient) {
            setPatientInfo(patient)
        }

    }, [getPatient, patientId])

    return (
        <div className="flex flex-col gap-4 justify-between md:flex-row">
            <div className="flex flex-row justify-between items-center md:flex-col md:justify-normal md:items-baseline md:gap-y-4">
                <div>
                    <h3>Patient information</h3>
                    <p className="text-[#262626] text-opacity-50 hidden md:block">Personal information about Patient</p>
                </div>
                <div>
                    <button onClick={()=>setEditPatientInfo(true)} className="border border-[#1F5AF4] bg-opacity-40 py-1 md:py-2 px-2 md:px-6 text-[#1F5AF4] flex justify-center items-center gap-1"><RiEdit2Fill /><span>{smallDevice?"Edit":"Edit Patient information"}</span></button>
                </div>

            </div>
            <Formik
                initialValues={defaultPatient}
                validationSchema={patientInfoSchama}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {() => (
                    <Form>
                        <div className="mb-4">
                            <CustomInput
                                label='Hospital ID'
                                name="hospitalId"
                                type="text"
                                placeholder="Hospital ID"
                                showlabel={true}
                                disabled={!editPatientInfo}

                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
                            <div>
                                <CustomInput
                                    label='First Name'
                                    name="firstName"
                                    type="text"
                                    placeholder="FirstName"
                                    showlabel={true}
                                    disabled={!editPatientInfo}
                                />
                            </div>
                            <div>
                                <CustomInput
                                    label='Last Name'
                                    name="lastName"
                                    type="text"
                                    placeholder="LastName"
                                    showlabel={true}
                                    disabled={!editPatientInfo}
                                />
                            </div>
                            <div>
                                <CustomSelectField
                                    label='Gender'
                                    name="gender"
                                    showlabel={true}
                                    disabled={!editPatientInfo}
                                >
                                    <option value="">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </CustomSelectField>
                            </div>
                            <div>
                                <CustomInput
                                    label='Phone Number'
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                    showlabel={true}
                                    disabled={!editPatientInfo}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <CustomInput
                                label='Email Address'
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                showlabel={true}
                                disabled={!editPatientInfo}
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <button type='submit' disabled={!editPatientInfo} className={`bg-[#1F5AF4] ${!editPatientInfo?"bg-opacity-40":""} py-4 px-8 text-white`}>Save Changes</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default PatientInfoForm