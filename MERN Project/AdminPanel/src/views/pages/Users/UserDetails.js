import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader, CButton, CAlert } from '@coreui/react'
import { useUser } from '../../../Hooks/useUsers'
import { useDeleteUser } from '../../../Hooks/delete'

const UserDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useUser(id)
  const { mutate, isLoading: isDeleting, error: deleteError } = useDeleteUser()

  // Handle deletion with confirmation
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      mutate(data._id, {
        onSuccess: () => {
          alert('User successfully deleted.')
          navigate('/UserList') // Redirect to users list after deletion
        },
        onError: (err) => {
          console.error('Failed to delete user:', err)
        },
      })
    }
  }

  // Display loading state
  if (isLoading) {
    return <div className="text-center text-gray-500">loading......</div>
  }

  // Display error state
  if (isError) {
    return (
      <CAlert color="danger" className="text-center">
        Error: {error.message || 'Something went wrong.'}
      </CAlert>
    )
  }

  return (
    <div className="container mt-5">
      <CCard>
        <CCardHeader>
          <h1 className="text-3xl font-bold">User Details</h1>
        </CCardHeader>
        <CCardBody>
          <div className="space-y-4">
            <p>
              <strong>ID:</strong> {data._id}
            </p>
            <p>
              <strong>Username:</strong> {data.username}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Phone:</strong> {data.phone}
            </p>
            <p>
              <strong>Admin:</strong> {data.isAdmin ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Exhibitor:</strong> {data.isExhibitor ? 'Yes' : 'No'}
            </p>
          </div>

          {/* Display Delete Error */}
          {deleteError && (
            <CAlert color="danger" className="mt-4 text-center">
              Failed to delete user: {deleteError.message || 'Unknown error.'}
            </CAlert>
          )}

          {/* Buttons Section */}
          <div className="d-flex justify-content-between mt-4">
            {/* Edit Button */}
            <CButton
              color="primary"
              onClick={() => navigate(`/EditUser/${data._id}`)}
              className="w-100 mr-2"
            >
              Edit User
            </CButton>

            {/* Delete Button */}
            <CButton
              color="danger"
              onClick={handleDelete}
              className="w-100 ml-2"
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete User'}
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default UserDetails
