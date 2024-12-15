import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '@/utils/hooks/useAuth'

const { authenticatedEntryPath } = appConfig

const PurchasedRoute = () => {
    const { authenticated } = useAuth()

    const location = useLocation()


    if (!authenticated) {
        return (
            <Navigate
                replace
                to={`${authenticatedEntryPath}`}
            />
        )
    }

    return <Outlet />
}

export default PurchasedRoute
