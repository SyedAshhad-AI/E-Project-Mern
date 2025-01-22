import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const urlUsers = 'http://localhost:8000/user/users'
const urlComments = 'http://localhost:8000/contactUs/allComments'
const urlEvents = 'http://localhost:8000/events/deleteEvent'
const urlUserEvents = 'http://localhost:8000/events/deleteUserEvent/:userId/:eventId'

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  // Define the mutation
  const deleteUser = useMutation({
    mutationFn: (id) => {
      // Retrieve the token from localStorage, context, or another secure source
      const token = localStorage.getItem('Token') // Replace with your token retrieval logic

      // Perform the DELETE request with authorization
      return axios.delete(`${urlUsers}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('users') // Invalidate the users query
    },
    mutationKey: ['UserDeleted'],
  })

  return deleteUser
}

export const useDeleteComment = () => {
  const queryClient = useQueryClient()

  // Define the mutation
  const deleteComment = useMutation({
    mutationFn: (id) => {
      // Retrieve the token from localStorage, context, or another secure source
      const token = localStorage.getItem('Token') // Replace with your token retrieval logic

      // Perform the DELETE request with authorization
      return axios.delete(`${urlComments}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('comments') // Invalidate the users query
    },
    mutationKey: ['CommentDeleted'],
  })

  return deleteComment
}

export const useDeleteEvent = () => {
  const queryClient = useQueryClient()

  // Define the mutation
  const deleteEvent = useMutation({
    mutationFn: (id) => {
      // Retrieve the token from localStorage, context, or another secure source
      const token = localStorage.getItem('Token') // Replace with your token retrieval logic

      // Perform the DELETE request with authorization
      return axios.delete(`${urlEvents}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries('events') // Invalidate the users query
    },
    mutationKey: ['EventDelete'],
  })

  return deleteEvent
}
