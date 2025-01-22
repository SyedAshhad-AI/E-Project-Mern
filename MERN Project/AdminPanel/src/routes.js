import React from 'react'
import ProtectExhibitor from './components/Helpers/ProtectExhibitor.js'
import ProtectAdmin from './components/Helpers/ProtectAdmin.jsx'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const EventList = React.lazy(() => import('./views/pages/Event/EventList.js'))
const EventEdit = React.lazy(() => import('./views/pages/Event/EventEdit.js'))
const EventAdd = React.lazy(() => import('./views/pages/Event/EventAdd.js'))
const AvailableEvents = React.lazy(() => import('./views/pages/UserEvents/AvailableEvents.js'))
const Charts = React.lazy(() => import('./views/charts/Charts.js'))
const UserList = React.lazy(() => import('./views/pages/Users/UserList.js'))
const EditUser = React.lazy(() => import('./views/pages/Users/EditUser.js'))
const UserDetails = React.lazy(() => import('./views/pages/Users/UserDetails.js'))
const FeedBackForm = React.lazy(() => import('./views/pages/FeedBack/FeedBackForm.js'))
const FeedBackFormList = React.lazy(() => import('./views/pages/FeedBack/FeedBackList.js'))
const UserFeedbackList = React.lazy(() => import('./views/pages/FeedBack/UserFeedbackList.js'))
const UserEventList = React.lazy(() => import('./views/pages/UserEvents/UserEventList.js'))
const unauthorized = React.lazy(() => import('./components/Helpers/unauthorized.jsx'))

// Wrapper functions
const withExhibitorProtection = (Component) => (
  <ProtectExhibitor>
    <Component />
  </ProtectExhibitor>
)

const withAdminProtection = (Component) => (
  <ProtectAdmin>
    <Component />
  </ProtectAdmin>
)

// Route definitions
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: withExhibitorProtection(Dashboard) },
  { path: '/EventList', name: 'EventList', element: withExhibitorProtection(EventList) },
  { path: '/EventEdit/:id', name: 'EventEdit', element: withExhibitorProtection(EventEdit) },
  { path: '/EventAdd', name: 'EventAdd', element: withExhibitorProtection(EventAdd) },
  {
    path: '/AvailableEvents',
    name: 'AvailableEvents',
    element: withExhibitorProtection(AvailableEvents),
  },
  {
    path: '/UserEventList',
    name: 'UserEventList',
    element: withExhibitorProtection(UserEventList),
  },
  { path: '/Charts', name: 'Charts', element: withAdminProtection(Charts) },
  { path: '/UserList', name: 'UserList', element: withAdminProtection(UserList) },
  { path: '/EditUser/:id', name: 'EditUser', element: withAdminProtection(EditUser) },
  { path: '/UserDetails/:id', name: 'UserDetails', element: withAdminProtection(UserDetails) },
  { path: '/FeedBackForm', name: 'FeedBackForm', element: withExhibitorProtection(FeedBackForm) },
  {
    path: '/FeedBackFormList',
    name: 'FeedBackFormList',
    element: withExhibitorProtection(FeedBackFormList),
  },
  {
    path: '/UserFeedbackList',
    name: 'UserFeedbackList',
    element: withExhibitorProtection(UserFeedbackList),
  },
  { path: '/unauthorized', name: 'unauthorized', element: unauthorized },
]

export default routes
