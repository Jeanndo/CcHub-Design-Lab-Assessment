import { FC } from 'react'

interface Props{
    onDone:()=>void
}

const ScanPackage: FC<Props> = ({onDone}) => {
    return (
        <div>ScanPackage</div>
    )
}

export default ScanPackage