
import { Navigate, Outlet } from 'react-router-dom'

import { ProtectedRouteInterface } from '../Interfaces'

export const ProtectedRoutes = ({ children, isAuth, redirectTo='/' }: ProtectedRouteInterface) => {
  if(!isAuth) {
    return <Navigate to={redirectTo}/>
  }
  return children ? children : <Outlet />
}

