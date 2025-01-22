import { useMutation, useQueryClient } from '@tanstack/react-query'

const url = 'http://localhost:8000/events/addEventToUser' // Updated to match the API route

export const useAddEventsToUser = () => {
  const queryClient = useQueryClient()
  const token = localStorage.getItem('Token')

  return useMutation({
    mutationFn: async (eventData) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData), // Sending userId and eventId in the request body
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Error adding event')
      }

      return data
    },
    onSuccess: () => {
      // Invalidate the 'events' query to ensure the data is refetched
      queryClient.invalidateQueries({ queryKey: ['userEvents', 'profile'] })
    },
    mutationKey: ['AddUserEvents'], // Key to uniquely identify this mutation
  })
}
