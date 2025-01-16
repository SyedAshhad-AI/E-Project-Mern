import React from 'react'
import { useGetEvents } from '../../../Hooks/useGetEvents'
import { useDeleteEvent } from '../../../Hooks/delete'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

const EventList = () => {
  const navigate = useNavigate()
  const { mutate, isLoading: isDeleting } = useDeleteEvent()
  const { data: events, isLoading, error } = useGetEvents()

  if (isLoading) return <p>Loading events...</p>
  if (error) return <p>Error loading events!</p>

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      mutate(id, {
        onSuccess: () => {
          alert('Event successfully deleted.')
        },
        onError: (err) => {
          console.error('Failed to delete event:', err)
          alert('Failed to delete event.')
        },
      })
    }
  }

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
                    <CButton
                      color="primary"
                      onClick={() => navigate(`/EventEdit/${event._id}`)}
                      disabled={isDeleting}
                    >
                      Edit
                    </CButton>
                    <CButton
                      color="danger"
                      onClick={() => handleDelete(event._id)}
                      disabled={isDeleting}
                    >
                      Delete
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

export default EventList
