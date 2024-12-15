import { Navigate, Outlet,useLocation } from 'react-router-dom'
import appConfig from '@/configs/app.config'
import useAuth from '@/utils/hooks/useAuth'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
const { authenticatedEntryPath } = appConfig
import { REDIRECT_URL_KEY } from '@/constants/app.constant'

const AuthRoute = () => {
    const { authenticated } = useAuth()
    console.log()
    const location = useLocation()



    // Render public routes for unauthenticated users
    return authenticated?<Navigate replace to={`${authenticatedEntryPath}`}/>:<Outlet />;
}

export default AuthRoute

