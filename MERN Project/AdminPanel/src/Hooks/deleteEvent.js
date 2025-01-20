import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const useRemoveEventFromUser = () => {
  const queryClient = useQueryClient()
  // Define the mutation
  const removeEventFromUser = useMutation({
    mutationFn: ({ userId, eventId }) => {
      // Retrieve the token from localStorage, context, or another secure source
      const token = localStorage.getItem('Token') // Replace with your token retrieval logic

      // Perform the DELETE request with authorization
      return axios.delete(`http://localhost:8000/events/deleteUserEvent/${userId}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('profile') // Invalidate the related query
    },
    mutationKey: ['RemoveEventFromUser'], // Unique key for the mutation
  })

  return removeEventFromUser
}
