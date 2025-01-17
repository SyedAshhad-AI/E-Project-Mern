import React from 'react'
import { Link } from 'react-router-dom'

import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
import { useListUsers } from '../../../Hooks/useUsers'

const UsersList = () => {
  const { data: users, isLoading, isError, error } = useListUsers()
  if (isLoading) return 'Loading...'
  if (isError) return <p className="text-center text-danger">Error: {error.message}</p>

  return (
    <CContainer className="py-4">
      <h2 className="text-center mb-4 text-white">Users List</h2>
      <CRow className="gy-4">
        {users.map((user) => (
          <CCol xs="12" sm="6" md="4" lg="3" key={user._id}>
            <CCard className="shadow-sm h-100">
              <CCardBody className="text-center">
                <CCardTitle>{user.username}</CCardTitle>
                <CCardText>{user.email}</CCardText>
                <Link to={`/UserDetails/${user._id}`}>
                  <CButton color="primary" className="mt-3">
                    View Details
                  </CButton>
                </Link>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </CContainer>
  )
}

export default UsersList
