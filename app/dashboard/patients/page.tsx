import { FC, Fragment } from 'react'
import PatientsTable from '@/components/tables/PatientsTable'
import SortAndSearch from '@/components/dashboard/PatientSortAndSearch'
// import Pagination from '@/components/dashboard/Pagination'

const PatientsPage: FC = () => {
    return (
        <Fragment>
            <SortAndSearch />
            <div className="w-full bg-white px-[46px] py-[31px]">
                <PatientsTable />
                {/* <Pagination itemsPerPage={10}/> */}
            </div>
        </Fragment>
    )
}

export default PatientsPage
