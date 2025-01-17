import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CButton,
  CAlert,
} from '@coreui/react'
import { useUpdateUser } from '../../../Hooks/useUpdateUser'
import { useUser } from '../../../Hooks/useUsers'

const EditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useUser(id)
  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser()

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    isExhibitor: '',
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (data) {
      setUser({
        username: data.username,
        email: data.email,
        phone: data.phone,
        isExhibitor: data.isExhibitor,
      })

      // Trigger flicker effect
      const flickerTimer = setInterval(() => {
        setUser((prevState) => ({
          ...prevState,
          isExhibitor: prevState.isExhibitor === 'yes' ? 'no' : 'yes',
        }))
      }, 500)

      // Stop flicker effect after 3 seconds
      setTimeout(() => clearInterval(flickerTimer), 3000)
    }
  }, [data])

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser(
      { id, ...user },
      {
        onSuccess: (data) => {
          navigate('/UserList')
          setSuccessMessage(data.success)
          setErrorMessage('')
          setUser({
            username: '',
            email: '',
            phone: '',
            isExhibitor: '',
          })
        },
        onError: (error) => {
          setSuccessMessage('')
          setErrorMessage(error.message)
        },
      },
    )
  }

  useEffect(() => {
    if (errorMessage || successMessage) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
        setErrorMessage('')
        setSuccessMessage('')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [errorMessage, successMessage])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <CContainer className="py-4">
      <CRow className="justify-content-center">
        <CCol md="6">
          <CCard>
            <CCardHeader className="bg-dark text-white">
              <h2 className="text-center">Update your account</h2>
            </CCardHeader>
            <CCardBody>
              {visible && errorMessage && (
                <CAlert color="danger" className="text-center">
                  <strong>Error:</strong> {errorMessage}
                </CAlert>
              )}
              {visible && successMessage && (
                <CAlert color="success" className="text-center">
                  <strong>Success:</strong> {successMessage}
                </CAlert>
              )}
              <CForm className="space-y-6 mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <CFormInput
                    name="username"
                    type="text"
                    required
                    value={user.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <CFormInput
                    name="email"
                    type="email"
                    required
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <CFormInput
                    name="phone"
                    type="tel"
                    required
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Is Exhibitor</label>
                  <CFormInput
                    name="isExhibitor"
                    type="text"
                    required
                    value={user.isExhibitor}
                    onChange={handleChange}
                  />
                </div>

                <CButton type="submit" color="primary" className="w-100" disabled={isUpdating}>
                  {isUpdating ? 'Updating...' : 'Update'}
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default EditUser
