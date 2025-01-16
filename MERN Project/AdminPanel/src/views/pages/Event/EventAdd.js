import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilClock, cilEducation, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { useProfile } from '../../../Hooks/useGetProfile'
import { useAddEvents } from '../../../Hooks/useAddEvents'
import { toast } from 'react-toastify'

const EventAdd = () => {
  const { data, isError } = useProfile()
  const { userDetails } = data || {}
  const { username } = userDetails || {}

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    createdBy: '',
  })

  useEffect(() => {
    if (username) {
      setFormData((prevData) => ({ ...prevData, createdBy: username }))
    }
  }, [username])

  const addEventsMutation = useAddEvents()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addEventsMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Event added successfully!')
        navigate('/EventList')
        setFormData({
          name: '',
          description: '',
          date: '',
          createdBy: username || '',
        })
      },
      onError: (error) => {
        console.error('Error adding event:', error)
        toast.error('Failed to add event. Please try again.')
      },
    })
  }

  if (isError) {
    return <p>Error loading profile. Please try again later.</p>
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Create Event</h1>
                  <p className="text-body-secondary">Fill in the details to create your event</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilEducation} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Event Name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Description"
                      name="description"
                      type="text"
                      required
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilClock} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      name="createdBy"
                      type="text"
                      required
                      disabled
                      value={formData.createdBy}
                      placeholder="Created By"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Create Event
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default EventAdd
