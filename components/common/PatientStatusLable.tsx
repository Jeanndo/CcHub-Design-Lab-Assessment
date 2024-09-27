import { statusColors } from '@/utils/constants'
import { FC } from 'react'

interface StatusProps {
    status: string
}
const PatientStatusLable: FC<StatusProps> = ({ status }) => {

    // Implement status label based on the status prop

    const statusWithColor = statusColors.find((item) => item.status === status)

    return (
        <div className="opacity-70 w-max py-1 px-4 font-semibold"
            style={{
                backgroundColor: statusWithColor?.bgColor,
                color: statusWithColor?.color,
            }}>
            {status}
        </div>
    )
}

export default PatientStatusLable
