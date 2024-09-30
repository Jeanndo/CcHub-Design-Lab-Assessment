import { useMediaQuery } from 'react-responsive'

export const useResponsive = ()=>{

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return {
        smallDevice:isTabletOrMobile
    }
}