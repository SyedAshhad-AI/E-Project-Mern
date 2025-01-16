import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const EventList = React.lazy(() => import('./views/pages/Event/EventList.js'))
const EventEdit = React.lazy(() => import('./views/pages/Event/EventEdit.js'))
const EventAdd = React.lazy(() => import('./views/pages/Event/EventAdd.js'))
const Charts = React.lazy(() => import('./views/charts/Charts.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/EventList', name: 'EventList', element: EventList },
  { path: '/EventEdit/:id', name: 'EventEdit', element: EventEdit },
  { path: '/EventAdd', name: 'EventAdd', element: EventAdd },
  { path: '/Charts', name: 'Charts', element: Charts },
]

export default routes
