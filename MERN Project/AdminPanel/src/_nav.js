import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Event Management',
  },
  {
    component: CNavItem,
    name: 'Add Events',
    to: '/EventAdd',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Event List',
    to: '/EventList',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Events',
  },
  {
    component: CNavGroup,
    name: 'Events',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Your Events',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Available Events',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Management',
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Add User',
        to: '/buttons/button-groups',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Feedback',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Your Feedback List',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Add Your Feedback',
        to: '/buttons/button-groups',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Auth',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
]

export default _nav
