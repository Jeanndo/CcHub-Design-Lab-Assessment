import type { Metadata } from "next";
import localFont from "next/font/local";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { ToastContainer} from 'react-toastify';

const geistSans = localFont({
  src: "./fonts/Gilroy-Light.woff",
  variable: "--font-gilroy-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Gilroy-Light.woff",
  variable: "--font-gilroy",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
