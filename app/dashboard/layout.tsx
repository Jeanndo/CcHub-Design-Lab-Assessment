import { FC } from 'react'
import { DashboardLayoutProps } from '@/utils/constants';
import Hearder from '@/components/dashboard/Hearder';
import ContentHeader from '@/components/dashboard/ContentHeader';

const DashoboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="bg-[#F9F9F9] w-full">
            <Hearder />
            <main>
                <ContentHeader />
                <div className="max-w-6xl mx-auto my-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashoboardLayout;

