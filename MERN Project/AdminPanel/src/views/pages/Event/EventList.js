import React from 'react';
import { useGetEvents } from '../../../Hooks/useGetEvents';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import dayjs from 'dayjs';

const EventList = () => {
    const { data: events, isLoading: isLoadingServices, error: errorServices } = useGetEvents();

    if (isLoadingServices) return <p>Loading...</p>;
    if (errorServices) return <p>Error loading events!</p>;

    return (
        <div className="container mt-4">
            <div className="row">
                {events && events.length > 0 ? (
                    events.map((event, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage
                                    orientation="top"
                                    src={event.image || 'src/assets/images/event.jpg'}
                                    alt={event.title || 'Event Image'}
                                />
                                <CCardBody>
                                    <CCardTitle>Event Name: {event.name || 'Event Title'}</CCardTitle>
                                    <CCardText>
                                        <b>Description:</b>   {event.description || 'No description available.'}
                                    </CCardText>
                                    <CCardText>
                                        <strong>Date:</strong> {dayjs(event.date).format('DD/MM/YYYY') || 'N/A'}
                                    </CCardText>
                                    <CButton color="primary">Edit</CButton>
                                    <CButton color="danger mx-2">Delete</CButton>
                                </CCardBody>
                            </CCard>
                        </div>
                    ))
                ) : (
                    <p>No events available.</p>
                )}
            </div>
        </div>
    );
};

export default EventList;
