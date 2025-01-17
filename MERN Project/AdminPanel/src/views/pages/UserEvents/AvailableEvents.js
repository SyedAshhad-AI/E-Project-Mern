import React from 'react'
import { useGetEvents } from '../../../Hooks/useGetEvents'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
const AvailableEvents = () => {
  const navigate = useNavigate()
  const { data: events, isLoading, error } = useGetEvents()

  if (isLoading) return <p>Loading events...</p>
  if (error) return <p>Error loading events!</p>


  return (
    <div className="container mt-4">
      <div className="row">
        {events && events.length > 0 ? (
          events.map((event) => (
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
                    <CButton color="primary" onClick={() => handleUpdateStatus(event._id)}>
                      Add Event
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
