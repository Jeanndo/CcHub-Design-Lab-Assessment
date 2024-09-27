import { FC } from 'react'
import NavLinks from './NavLinks'
import Image from 'next/image'

const Hearder: FC = () => {
    return (
        <header className='flex justify-between items-center w-full bg-white h-[75px] px-32'>
            <div><Image src="/assets/images/NIMR-logo.svg" alt="nimr logo" width={50} height={50} /></div>
            <div><NavLinks /></div>
            <div className="text-black">User Profile</div>
        </header>
    )
}

export default Hearder
