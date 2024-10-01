'use client'
import React, { FC, useState } from 'react'
import { Form, Formik, FormikHelpers} from "formik"
import { loginSchama } from '@/utils/ValidationSchemas'
import { FormValueTypes } from '@/utils/constants'
import CustomInput from '../customInput/CustomInput'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const LoginForm: FC = () => {

  const router = useRouter()

  const [showPassoword, setShowPassword] = useState<boolean>(false)
  

  // Function that will be called to login to the dashboard.
  const handleSubmit = (values: FormValueTypes, actions:FormikHelpers<FormValueTypes>) => {
    router.push("/dashboard")
    toast.success("Logged in successfuly🚀")
    console.log(values)
    console.log(actions)
  }

  // Toggle show password
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div>
      <Formik
        initialValues={{ email: "testing@gmail.com", password: "CCHUB DESING LAB" }}
        validationSchema={loginSchama}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <CustomInput
                name="email"
                type="email"
                placeholder="Email Address"
                label=''
                showlabel={false}
              />
            </div>
            <div className="mb-4 relative">
              <CustomInput
                name="password"
                type={showPassoword ? "text" : "password"}
                placeholder="Password"
                label=''
                showlabel={false}
              />
              {showPassoword ? <span className="absolute top-4 right-2 cursor-pointer" onClick={toggleShowPassword}>HIDE</span> : <span className="absolute top-4 right-2 cursor-pointer" onClick={toggleShowPassword}>SHOW</span>}
            </div>
            <div className="flex justify-around items-center mb-4">
              <div className="flex items-start ">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"/>
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-black">Remember me</label>
              </div>
              <div>
                <Link href="/forgotpassword" className="text-[#0148FF]">Forgot Password?</Link>
              </div>
            </div>
            <div className="w-full">
              <button className="w-full bg-[#1F5AF4] py-4 text-white">Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
