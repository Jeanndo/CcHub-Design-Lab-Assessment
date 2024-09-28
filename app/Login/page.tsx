import React, { FC, Fragment } from 'react'
import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/image'

const Login: FC = () => {
  
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="w-full 2xl:max-w-screen-xl m-0 2xl:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 relative">
            <div className="flex flex-col justify-center items-center">
              <Image src="/assets/images/logo.svg" width={50} height={50} alt="logo" />
            </div>
            <div className="mt-2 flex flex-col items-center">
              <div className="w-full flex-1">
                <div className="my-12 text-center">
                  <div
                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Sign in to continue
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <LoginForm />

                </div>
              </div>
            </div>

            <div className="mt-6 text-normal text-gray-600 text-center flex justify-center items-center absolute bottom-4 left-1/4">
              <span>Powered by</span> <Image src="/assets/images/co-creation-hub-logo.svg" alt="Cchub design lab logo" width={100} height={100} />
            </div>
          </div>
          <div className="flex-1 bg-[#005DCC] text-center hidden lg:flex relative">
            <div className="w-full">
              <Image className=" absolute -left-10 bottom-0" src="/assets/images/login-right-side-img.svg" layout='fill' objectFit='cover' alt='rider on bike' />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
