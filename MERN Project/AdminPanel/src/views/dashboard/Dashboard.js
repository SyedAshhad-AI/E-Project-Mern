import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react' // Import required Core UI components

const Dashboard = () => {
  return (
    <div>
      <CCard>
        <CCardHeader>Welcome</CCardHeader>
        <CCardBody>
          <h1>Welcome to the Dashboard!</h1>
          <p>This is your central hub for all activities.</p>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Dashboard
