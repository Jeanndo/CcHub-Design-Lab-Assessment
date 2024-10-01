'use -client'
import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { usePatient } from '@/hooks/usePatient';
interface QRCodeScannerProps {
    startScan: boolean;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ startScan}) => {

    const {handleGetQrCode,setIsScanning} = usePatient()
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {

        if (startScan && !scannerRef.current) {
            scannerRef.current = new Html5QrcodeScanner(
                'qr-reader',
                { fps: 10, qrbox: { width: 250, height: 250 } },
                false
            );

            const handleScanSuccess = (decodedText: string) => {
                setIsScanning(true)
                setTimeout(()=>{
                    setIsScanning(false)
                    setScanResult(decodedText);
                    handleGetQrCode(decodedText)
                    stopScanning();
                },5000)
                
                
            };

            const handleScanError = (err: unknown) => {
                console.warn('QR code scan failed: ', err);
                setError('Issue with reading,Please try again.');
                setIsScanning(false)
            };

            // Start scanning
            scannerRef.current.render(handleScanSuccess, handleScanError);
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startScan]);


    const stopScanning = () => {
        if (scannerRef.current) {
            scannerRef.current.clear().then(() => {
                console.log('Scanner stopped.');
                scannerRef.current = null;
            }).catch((error) => {
                console.error('Failed to clear QR scanner: ', error);
            });
        }
    };

    console.log(error)
    return (
        <div className="flex flex-col items-center justify-center">
            {scanResult ? (
                <p className="text-green-500">Scanned Result: {scanResult}</p>
            ) : (
                <div className="relative w-[300px] h-[300px] border-4 border-green-500">

                    <div id="qr-reader" className="w-full h-full"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-scanline"></div>
                </div>
            )}
        </div>
    );
};

export default QRCodeScanner;
