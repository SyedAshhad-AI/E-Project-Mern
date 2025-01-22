import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CContainer, CCard, CCardBody, CCardHeader, CButton, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilHome, cilAccountLogout } from '@coreui/icons'

const UnauthorizedPage = () => {
  const navigate = useNavigate()

  return (
    <CContainer className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <CCard className="text-center shadow-lg border-0" style={{ maxWidth: '500px' }}>
        <CCardHeader className="bg-warning text-dark py-4">
          <CIcon icon={cilLockLocked} size="4xl" className="mb-3" />
          <h2 className="mb-0">Access Denied</h2>
        </CCardHeader>
        <CCardBody>
          <p className="text-muted">You do not have the necessary permissions to view this page.</p>
          <CRow className="mt-4">
            <CCol>
              <CButton
                color="primary"
                variant="outline"
                className="w-100"
                onClick={() => navigate('/login')}
              >
                <CIcon icon={cilAccountLogout} className="me-2" />
                Go to Login
              </CButton>
            </CCol>
            <CCol>
              <CButton color="secondary" className="w-100" onClick={() => navigate('/')}>
                <CIcon icon={cilHome} className="me-2" />
                Back to Home
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}

export default UnauthorizedPage
