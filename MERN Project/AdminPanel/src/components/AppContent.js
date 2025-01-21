import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import ProtectExhibitor from './Helpers/ProtectExhibitor.js'
import ProtectAdmin from './Helpers/ProtectAdmin.jsx'

// Lazy-loaded components
const Dashboard = React.lazy(() => import('./../views/dashboard/Dashboard'))
const EventList = React.lazy(() => import('./../views/pages/Event/EventList.js'))
const EventEdit = React.lazy(() => import('./../views/pages/Event/EventEdit.js'))
const EventAdd = React.lazy(() => import('./../views/pages/Event/EventAdd.js'))
const AvailableEvents = React.lazy(() => import('./../views/pages/UserEvents/AvailableEvents.js'))
const Charts = React.lazy(() => import('./../views/charts/Charts.js'))
const UserList = React.lazy(() => import('./../views/pages/Users/UserList.js'))
const EditUser = React.lazy(() => import('./../views/pages/Users/EditUser.js'))
const UserDetails = React.lazy(() => import('./../views/pages/Users/UserDetails.js'))
const FeedBackForm = React.lazy(() => import('./../views/pages/FeedBack/FeedBackForm.js'))
const FeedBackFormList = React.lazy(() => import('./../views/pages/FeedBack/FeedBackList.js'))
const UserFeedbackList = React.lazy(() => import('./../views/pages/FeedBack/UserFeedbackList.js'))
const UserEventList = React.lazy(() => import('./../views/pages/UserEvents/UserEventList.js'))
const Unauthorized = React.lazy(() => import('./../components/Helpers/unauthorized.jsx'))

// Protect components

const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Exhibitor Protected Routes */}
          <Route element={<ProtectExhibitor />}>
            <Route path="/EventList" element={<EventList />} />
            <Route path="/EventEdit/:id" element={<EventEdit />} />
            <Route path="/EventAdd" element={<EventAdd />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<ProtectAdmin />}>
            <Route path="/UserList" element={<UserList />} />
            <Route path="/EditUser/:id" element={<EditUser />} />
            <Route path="/UserDetails/:id" element={<UserDetails />} />
            <Route path="/FeedBackFormList" element={<FeedBackFormList />} />
          </Route>

          <Route path="/AvailableEvents" element={<AvailableEvents />} />
          <Route path="/UserEventList" element={<UserEventList />} />
          <Route path="/FeedBackForm" element={<FeedBackForm />} />
          <Route path="/UserFeedbackList" element={<UserFeedbackList />} />

          {/* Admin Protected Routes */}
          <Route path="/Charts" element={<Charts />} />

          {/* Unauthorized Route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
