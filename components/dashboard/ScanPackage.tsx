'use client'
import { FC,useState } from 'react'
import Image from 'next/image';
import QRCodeScanner from './Scanner';


const ScanPackage: FC = () => {
    const [code, setCode] = useState<string>("");
    const [scanning, setScanning] = useState<boolean>(false)
    const [scanningDone, setScanningDone] = useState<boolean>(false)
    const [showScanner, setShowScanner] = useState<boolean>(false);

    const handleStartScan = () => {
        setShowScanner(true); 
    };

    return (

        <div className='mt-4'>
            <h3 className="text-center mb-4">Scan a package to assign it to <span className="font-bold">Oluwaseun Aregbesola</span></h3>
            {!scanning && !scanningDone && code === "" ? (
                <div>
                    <div className="flex flex-col gap-y-4 justify-normal md:flex-row md:justify-center md:items-center">
                        <div className="flex flex-col items-center gap-y-10">
                            {showScanner && <QRCodeScanner startScan={showScanner} setCode={setCode}/>}
                            {!showScanner&&<div>
                                <Image src="/assets/images/Qr-code-one.svg" width={200} height={200} alt='qr-code' />
                            </div>}
                            {!showScanner&&<div className="w-full flex justify-center items-center">
                                <button className="py-4 px-8 bg-[#276DF7] text-white font-bold" onClick={handleStartScan}>Scan Package</button>
                            </div>}
                        </div>
                        <div className="relative hidden items-center justify-center h-80  md:flex">
                            <div className="absolute w-px h-full bg-[#EFEFEF]"></div>
                            <span className="relative bg-white px-2 text-[#18131A]">OR</span>
                        </div>
                        <div className="relative flex items-center justify-center w-full md:hidden">
                            <div className="absolute h-px w-full bg-[#EFEFEF]"></div>
                            <span className="relative bg-white px-2 text-[#18131A]">OR</span>
                        </div>
                        <div className="px-10 md:px-0">
                            <form>
                                <div className="mb-4">Trouble scanning QR Code? <br />Enter manually</div>
                                <div>
                                    <input type="text"
                                        value={code}
                                        onChange={(event) => setCode(event.target.value)}
                                        placeholder='Enter Code'
                                        className="w-full px-8 py-4 font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" required />
                                </div>
                                <div className="mt-14">
                                    <button className="py-4 px-8 border border-[#276DF7] text-[#276DF7] font-bold w-full">Submit Code</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            ) : code === "" ? (
                <>
                    {!scanningDone ? <div className="flex flex-col justify-center items-center">
                        <div>
                            <Image src="/assets/images/Qrscanning-progress.svg" width={300} height={300} alt='qr-code' />
                        </div>
                        <span className="block mt-4 font-semibold">Scanning Package...</span>
                    </div> :
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <Image src="/assets/images/ScanDone.svg" width={300} height={300} alt='qr-code' />
                            </div>
                            <span className="block mt-4 font-semibold">Package successfully scanned</span>
                        </div>
                    }
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center px-4 md:px-60">
                        <div className="mb-4">Package Code</div>
                        <div className="w-full">
                            <input type="text"
                                value={code}
                                disabled
                                onChange={(event) => setCode(event.target.value)}
                                placeholder='Enter Code'
                                className="w-full px-8 py-4 text-2xl font-medium border border-gray-300 placeholder-gray-500  focus:outline-none focus:border-gray-400 focus:bg-white" required />
                        </div>
                        <div className="mt-2 flex justify-end w-full">
                            <button className="border-none text-[#F42C1F] font-bold">X Remove</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ScanPackage