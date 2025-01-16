import { useMutation, useQueryClient } from '@tanstack/react-query'

const url = 'http://localhost:8000/events/addEvent'

export const useAddEvents = () => {
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
        body: JSON.stringify(eventData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
    mutationKey: ['AddEvents'],
  })
}
