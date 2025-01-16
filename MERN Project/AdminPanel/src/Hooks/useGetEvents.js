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
    queryKey: ['event', id],
    queryFn: async () => {
      // Retrieve the token from local storage or your app's state management
      const token = localStorage.getItem('Token')

      // Use axios to make the request, including the Authorization header
      const response = await axios.get(`http://localhost:8000/events/eventById/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })

      return response.data // Axios automatically parses JSON responses
    },
  })

  return query
}
