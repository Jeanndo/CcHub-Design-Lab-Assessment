import type { Metadata } from "next";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { ToastContainer} from 'react-toastify';
import { Montserrat} from "@next/font/google"

export const metadata: Metadata = {
  title: "Nimcure",
  description: "Nimcure is a Drug prescription delivery service in a medical facility that allows pharmacy attendants to initiate a delivery for a new prescription or renew prescriptions for patients",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
