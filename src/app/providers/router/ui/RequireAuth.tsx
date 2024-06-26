import { UserRole, getAuthUserData, getUserRoles } from '@/entities/User'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
  roles: UserRole[] | undefined
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getAuthUserData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole)
      return hasRole
    })
  }, [])

  if (!auth || !hasRequiredRoles) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate
        to={RoutePath.forbidden_page}
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}
