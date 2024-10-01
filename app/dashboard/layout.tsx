import { FC } from 'react'
import { DashboardLayoutProps } from '@/utils/constants';
// import ContentHeader from '@/components/dashboard/ContentHeader';
import Header from '@/components/dashboard/Hearder';
import AppContextProvider from '@/context/providers/AppContextProvider';

const DashoboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <AppContextProvider>
        <div className="bg-[#F9F9F9] w-full min-h-screen">
            <Header/>
            <main>
                <div className="max-w-6xl mx-auto my-auto">
                    {children}
                </div>
            </main>
        </div>
        </AppContextProvider>
    )
}

export default DashoboardLayout;

