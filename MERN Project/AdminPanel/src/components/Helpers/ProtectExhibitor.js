import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../../Hooks/useGetProfile'

const ProtectExhibitor = () => {
  const { data, error, isLoading } = useProfile()

  // Display a loading screen while profile data is being fetched
  if (isLoading) {
    return <div>loading....</div> // Use a proper loading component
  }

  // Handle any errors during profile fetch
  if (error) {
    console.error('Error fetching profile:', error)
    return <Navigate to="/404" replace />
  }

  const { isAdmin, isExhibitor } = data?.userDetails || {}

  // Allow access if the user is either an admin or an exhibitor
  if (!isAdmin && !isExhibitor) {
    return <Navigate to="/unauthorizedPage" replace />
  }

  // Render the protected route's component if the user is an admin or exhibitor
  return <Outlet />
}

export default ProtectExhibitor
