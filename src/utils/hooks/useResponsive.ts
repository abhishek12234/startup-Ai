import { useEffect, useState } from 'react'

const breakpointInt = (str = '') => parseInt(str.replace('px', ''), 10)

// Define breakpoints manually (make sure they match your `tailwind.config.js` settings)
const breakpoint = {
    '2xl': 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 576,
}

const useResponsive = () => {
    const getAllSizes = (comparator = 'smaller') => {
        const currentWindowWidth = window.innerWidth
        return Object.fromEntries(
            Object.entries(breakpoint).map(([key, value]) => [
                key,
                comparator === 'larger'
                    ? currentWindowWidth > value
                    : currentWindowWidth < value,
            ])
        )
    }

    const getResponsiveState = () => {
        const currentWindowWidth = window.innerWidth
        return {
            windowWidth: currentWindowWidth,
            larger: getAllSizes('larger'),
            smaller: getAllSizes('smaller'),
        }
    }

    const [responsive, setResponsive] = useState(getResponsiveState())

    const resizeHandler = () => setResponsive(getResponsiveState())

    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        return () => window.removeEventListener('resize', resizeHandler)
    }, [])

    return responsive
}

export default useResponsive
