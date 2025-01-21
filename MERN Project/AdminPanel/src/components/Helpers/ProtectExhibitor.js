import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useProfile } from '../../Hooks/useGetProfile'

const ProtectExhibitor = () => {
  const { data, error, isLoading } = useProfile()

  // Display a loading screen while profile data is being fetched
  if (isLoading) {
    return <div>Loading...</div> // Replace with a spinner or a styled loading component if needed
  }

  // Handle any errors during profile fetch
  if (error) {
    console.error('Error fetching profile:', error)
    return <Navigate to="/404" replace />
  }

  // Ensure that data is defined and destructure userDetails safely
  const { isAdmin, isExhibitor } = data?.userDetails || {}

  // Check if the user has access rights
  if (!isAdmin && !isExhibitor) {
    return <Navigate to="/unauthorized" replace />
  }

  // Render the protected route's component if the user has the right access
  return <Outlet />
}

export default ProtectExhibitor
