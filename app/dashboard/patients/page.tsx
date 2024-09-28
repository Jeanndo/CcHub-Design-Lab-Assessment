import { FC, Fragment } from 'react'
import PatientsTable from '@/components/tables/PatientsTable'
import SortAndSearch from '@/components/dashboard/PatientSortAndSearch'

const PatientsPage: FC = () => {
    return (
        <Fragment>
            <SortAndSearch />
            <div className="w-full bg-white px-[46px] py-[31px]">
                <PatientsTable />
            </div>
        </Fragment>
    )
}

export default PatientsPage
