import React from 'react'
import { useGetEvents } from '../../../Hooks/useGetEvents'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { useAddEventsToUser } from '../../../Hooks/addEventToUser'
import { useProfile } from '../../../Hooks/useGetProfile'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AvailableEvents = () => {
  const navigate = useNavigate()
  const { data: events, isLoading, error } = useGetEvents()
  const { data: profileData } = useProfile()
  const { userDetails } = profileData || {}
  const { _id: userId } = userDetails || {}
  const { mutate } = useAddEventsToUser()

  const handleAddEvent = (userId, eventId) => {
    mutate(
      { userId, eventId },
      {
        onSuccess: () => {
          toast.success('Event Booked successfully!')
        },
        onError: (error) => {
          toast.error(`Error adding event: ${error.message}`)
        },
      },
    )
  }

  const filteredEvents = events?.filter((event) => event.isAvailable && event.isApproved)

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row">
        {filteredEvents && filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event._id} className="col-md-4 mb-4">
              <CCard style={{ width: '18rem' }}>
                <CCardImage
                  orientation="top"
                  src={event.image || 'src/assets/images/event.jpg'}
                  alt={event.title || 'Event Image'}
                />
                <CCardBody>
                  <CCardTitle>{event.name || 'Event Title'}</CCardTitle>
                  <CCardText>
                    <b>Description:</b> {event.description || 'No description available.'}
                  </CCardText>
                  <CCardText>
                    <strong>Date:</strong>{' '}
                    {event.date ? dayjs(event.date).format('DD/MM/YYYY') : 'N/A'}
                  </CCardText>
                  <div className="d-flex justify-content-between">
                    <CButton color="primary" onClick={() => handleAddEvent(userId, event._id)}>
                      Book Event
                    </CButton>
                  </div>
                </CCardBody>
              </CCard>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  )
}

export default AvailableEvents
