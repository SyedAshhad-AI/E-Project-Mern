import React from 'react'
import { useGetEvents } from '../../../Hooks/useGetEvents'

const EventEdit = () => {
    const { data: events, isLoading: isLoadingServices, error: errorServices } = useGetEvents();
    console.log(events);
    return (
        <div>
            <h1>
               Edit
            </h1>
        </div>
    )
}

export default EventEdit
