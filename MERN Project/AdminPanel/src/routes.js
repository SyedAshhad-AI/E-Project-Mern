import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const EventList = React.lazy(() => import('./views/pages/Event/EventList.js'))
const EventEdit = React.lazy(() => import('./views/pages/Event/EventEdit.js'))
const EventAdd = React.lazy(() => import('./views/pages/Event/EventAdd.js'))
const Charts = React.lazy(() => import('./views/charts/Charts.js'))
const UserList = React.lazy(() => import('./views/pages/Users/UserList.js'))
const EditUser = React.lazy(() => import('./views/pages/Users/EditUser.js'))
const UserDetails = React.lazy(() => import('./views/pages/Users/UserDetails.js'))
const FeedBackForm = React.lazy(() => import('./views/pages/FeedBack/FeedBackForm.js'))
const FeedBackFormList = React.lazy(() => import('./views/pages/FeedBack/FeedBackList.js'))
const AvailableEvents = React.lazy(() => import('./views/pages/UserEvents/AvailableEvents.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/EventList', name: 'EventList', element: EventList },
  { path: '/EventEdit/:id', name: 'EventEdit', element: EventEdit },
  { path: '/EventAdd', name: 'EventAdd', element: EventAdd },

  { path: '/Charts', name: 'Charts', element: Charts },

  { path: '/UserList', name: 'UserList', element: UserList },
  { path: '/EditUser/:id', name: 'EditUser', element: EditUser },
  { path: '/UserDetails/:id', name: 'UserDetails', element: UserDetails },

  { path: '/FeedBackForm', name: 'FeedBackForm', element: FeedBackForm },
  { path: '/FeedBackFormList', name: 'FeedBackFormList', element: FeedBackFormList },

  { path: '/AvailableEvents', name: 'AvailableEvents', element: AvailableEvents },

]

export default routes
