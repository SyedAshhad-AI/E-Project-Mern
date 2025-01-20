import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const urlComments = 'http://localhost:8000/contactUs/allComments'

const getAuthToken = () => {
  return localStorage.getItem('Token')
}

export const useListComments = () => {
  const query = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      // Retrieve the JWT token from localStorage (or wherever it's stored)
      const token = getAuthToken()

      const response = await fetch(urlComments, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Attach the JWT token here
        },
      })

      if (!response.ok) {
        const errorMessage = `Error fetching comments: ${response.status} - ${response.statusText}`
        throw new Error(errorMessage)
      }

      return response.json()
    },
    onError: (error) => {
      console.error('Error fetching comments:', error)
    },
  })

  return query
}

export const useUserComments = (name) => {
  const query = useQuery({
    queryKey: ['comments', name],
    queryFn: async () => {
      // Retrieve the token from local storage or your app's state management
      const token = getAuthToken()

      // Use axios to make the request, including the Authorization header
      const response = await axios.get(`http://localhost:8000/contactUs/userComments/${name}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
      })

      return response.data // Axios automatically parses JSON responses
    },
  })

  return query
}
