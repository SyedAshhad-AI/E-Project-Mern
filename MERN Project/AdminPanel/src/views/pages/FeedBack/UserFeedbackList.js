import { CCard, CCardBody, CCardHeader, CButton, CSpinner, CFormTextarea } from '@coreui/react'
import { useListComments, useUserComments } from '../../../Hooks/useGetComments'
import { useDeleteComment } from '../../../Hooks/delete'
import React from 'react'
import { useProfile } from '../../../Hooks/useGetProfile'

const Comments = () => {
  const { mutate, isLoading: isDeleting } = useDeleteComment()
  const {
    data: profileData,
    isLoading: isProfileLoading,
    isError: isProfileError,
    error: profileError,
  } = useProfile()
  const { userDetails } = profileData || {}
  const { username } = userDetails || {}
  const {
    data: comments = [],
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    error: commentsError,
  } = useUserComments(username)

  if (isProfileLoading || isCommentsLoading) {
    return (
      <div className="text-center mt-5">
        <CSpinner color="primary" />
        <p>Loading comments...</p>
      </div>
    )
  }

  if (isProfileError || isCommentsError) {
    const errorMessage = profileError?.message || commentsError?.message || 'Something went wrong.'
    return <p className="text-center text-danger">Error: {errorMessage}</p>
  }

  if (!comments || comments.length === 0) {
    return <p className="text-center mt-4">No comments available.</p>
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      mutate(id, {
        onSuccess: () => {
          alert('Comment successfully deleted.')
        },
        onError: (err) => {
          console.error('Failed to delete comment:', err)
          alert('Failed to delete comment.')
        },
      })
    }
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Comments</h2>
      {comments.map((comment) => (
        <CCard key={comment._id} className="mb-3">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>User Name: {comment.name}</strong>
            <span className="text-muted">{comment.email}</span>
            <span className="text-muted">Event Name: {comment.nameOfEvent}</span>
          </CCardHeader>
          <CCardBody>
            <CFormTextarea className="mb-3" readOnly value={comment.message} rows={4} />
            <CButton color="danger" onClick={() => handleDelete(comment._id)} disabled={isDeleting}>
              {isDeleting ? <CSpinner size="sm" /> : 'Delete'}
            </CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  )
}

export default Comments
