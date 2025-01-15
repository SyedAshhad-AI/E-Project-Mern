import React from 'react'
import { useGetEvents } from '../../../Hooks/useGetEvents'

const EventAdd = () => {
    const { data: events, isLoading: isLoadingServices, error: errorServices } = useGetEvents();
    console.log(events);
    return (
        <div>
            <h1>
               Add
            </h1>
        </div>
    )
}

export default EventAdd
