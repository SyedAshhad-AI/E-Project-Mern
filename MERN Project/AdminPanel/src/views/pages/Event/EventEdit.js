import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
import { cilEducation, cilClock, cilUser } from '@coreui/icons'
import { useEvent } from '../../../Hooks/useGetEvents'
import { useUpdateEvent } from '../../../Hooks/updateEvent'

const EventEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: event, isLoading } = useEvent(id)
  const { mutate: updateEvent, isLoading: isUpdating } = useUpdateEvent()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    createdBy: '',
  })

  useEffect(() => {
    console.log('Event data:', event) // Debugging: Log the event data
    if (event) {
      setFormData({
        name: event.name || '',
        description: event.description || '',
        date: event.date || '', // Ensure it's in the correct format
        createdBy: event.createdBy || '',
      })
    }
  }, [event])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateEvent(
      { id, ...formData },
      {
        onSuccess: () => {
          navigate('/EventList')
        },
      },
    )
  }

  if (isLoading || isUpdating) {
    return <div>Loading...</div>
  }

  if (!event) {
    return <div>Event data not found!</div> // Handle case where event is not loaded
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Edit Event</h1>
                  <p className="text-body-secondary">Update the details of your event</p>
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
                      Update Event
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

export default EventEdit
