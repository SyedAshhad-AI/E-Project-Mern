import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useUpdateEventStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ eventId, statusUpdates }) => {
      // Retrieve the token from local storage or any other secure place
      const token = localStorage.getItem('Token') // Assuming the token is stored in localStorage

      // Set the authorization header if the token is available
      const config = token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}

      try {
        // Send the PUT request with the authorization header
        const response = await axios.put(
          `http://localhost:8000/events/updateStatus/${eventId}`,
          statusUpdates,
          config,
        )
        return response.data
      } catch (error) {
        // Handle errors appropriately
        throw new Error(error.response?.data?.message || 'Error updating event status')
      }
    },

    onSuccess: (data) => {
      // Invalidate the "events" query to refresh the event data
      queryClient.invalidateQueries('events')
      console.log('Event updated successfully:', data)
    },

    onError: (error) => {
      console.error('Error updating event status:', error)
    },
  })
}

export const useUpdateEvent = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updatedUser) => {
      const { id, ...data } = updatedUser

      // Retrieve the token from local storage or any other secure place
      const token = localStorage.getItem('Token') // Assuming the token is stored in localStorage

      // Set the authorization header if the token is available
      const config = token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}

      try {
        // Send the PUT request with the authorization header
        const response = await axios.put(
          `http://localhost:8000/events/editEvent/${id}`,
          data,
          config,
        )
        return response.data
      } catch (error) {
        // Handle errors appropriately
        throw new Error(error.response?.data?.message || 'Error updating Event')
      }
    },

    onSuccess: () => {
      // Invalidate the "users" query to refresh the user data
      queryClient.invalidateQueries('events')
    },
  })
}
