// components/QrScanner.tsx
import React, { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

interface QrScannerProps {
    onScanSuccess: (decodedText: string) => void;
}

const QrScanner: React.FC<QrScannerProps> = ({ onScanSuccess }) => {
    const [scanning, setScanning] = useState(true);
    const [cameraId, setCameraId] = useState<string | null>(null);

    useEffect(() => {
        const startScanning = async () => {
            const cameraDevices = await Html5Qrcode.getCameras(); // List of cameras

            if (cameraDevices && cameraDevices.length > 0) {
                setCameraId(cameraDevices[0].id); // Select the first available camera
            }
        };
        startScanning();
    }, []);

    useEffect(() => {
        if (!cameraId) return;

        const html5QrCode = new Html5Qrcode('qr-reader');

        html5QrCode.start(
            cameraId,
            { fps: 10, qrbox: { width: 300, height: 300 } }, // Increase the size
            (decodedText) => {
                setScanning(false);
                onScanSuccess(decodedText);
                html5QrCode.stop();
            },
            (error) => {
                console.warn('QR code scan error:', error);
            }
        );

        return () => {
            html5QrCode.stop();
        };
    }, [cameraId, onScanSuccess]);

    return (
        <div className="relative mx-auto w-full max-w-md">
            <div id="qr-reader" className="w-full h-64 border-2 border-gray-800"></div>
            {scanning && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-lg z-10">
                    Scanning...
                </div>
            )}
        </div>
    );
};

export default QrScanner;
