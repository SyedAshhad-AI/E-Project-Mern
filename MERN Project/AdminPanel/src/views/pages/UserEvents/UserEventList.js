import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import dayjs from 'dayjs'
import { useProfile } from '../../../Hooks/useGetProfile'
import { useEvent } from '../../../Hooks/useGetEvents'
import { useRemoveEventFromUser } from '../../../Hooks/deleteEvent'

const UserEventList = () => {
  const { data: profileData } = useProfile()
  const { userDetails } = profileData || {}
  const { eventIds } = userDetails || {}
  console.log(userDetails)
  // Ensure eventIds is an array before calling join
  const eventIdsString = Array.isArray(eventIds) ? eventIds.join(',') : ''

  // Custom hook to fetch events based on eventIds
  const { data: events, isLoading, error } = useEvent(eventIdsString)

  const removeEvent = useRemoveEventFromUser()

  // Handle event removal
  const handleRemoveEvent = (userId, eventId) => {
    if (removeEvent && removeEvent.mutate) {
      removeEvent.mutate({ userId, eventId })
    }
  }

  if (isLoading) return <p>Loading events...</p>
  if (error) return <p>Error: {error.message || 'Something went wrong'}</p>

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
                  alt={event.name || 'Event Image'}
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
                      color="danger"
                      onClick={() => handleRemoveEvent(userDetails?._id, event._id)}
                    >
                      Cancel Event
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

export default UserEventList
