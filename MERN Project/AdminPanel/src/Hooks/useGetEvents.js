import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url = 'http://localhost:8000/events/allEvent'

export const useGetEvents = () => {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      // Retrieve the token from local storage or your app's state management
      const token = localStorage.getItem('Token')

      // Set up axios with the authorization header
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })

      return response.data // Axios automatically parses JSON responses
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  return query
}

export const useEvent = (id) => {
  const query = useQuery({
    queryKey: ['event', 'profile', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('Event ID is required')
      }

      const token = localStorage.getItem('Token')
      if (!token) {
        throw new Error('Authentication token is missing')
      }

      // Split the 'id' string into an array if it contains multiple IDs
      const ids = id.split(',').map((idStr) => idStr.trim())

      // Make the request to the API
      const response = await axios.get(`http://localhost:8000/events/eventById/${ids.join(',')}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })

      return response.data // Axios automatically parses JSON responses
    },
    enabled: !!id, // Only run the query if `id` is truthy
    onError: (error) => {
      console.error('Error fetching events:', error.message)
    },
  })

  return query
}
