import type { Metadata } from "next";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { ToastContainer} from 'react-toastify';

export const metadata: Metadata = {
  title: "Nimcure",
  description: "Nimcure is a Drug prescription delivery service in a medical facility that allows pharmacy attendants to initiate a delivery for a new prescription or renew prescriptions for patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
