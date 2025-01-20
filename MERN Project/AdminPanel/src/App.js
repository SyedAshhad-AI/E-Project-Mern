import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'
import { isTokenExpired, scheduleTokenRefresh } from './Hooks/authUtils'
import { RefreshToken } from './Hooks/refreshToken'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed queries twice
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    },
  },
})

const App = () => {
  useEffect(() => {
    const initializeAuth = async () => {
      console.log('Initializing authentication...')

      const accessToken = localStorage.getItem('Token')
      const refreshToken = localStorage.getItem('refreshToken')

      if (!refreshToken) {
        console.warn('No refresh token found. Please log in again.')
        return
      }

      if (!accessToken || isTokenExpired(accessToken)) {
        console.log('Access token is missing or expired. Attempting to refresh...')
        try {
          await RefreshToken(refreshToken)
          console.log('Access token successfully refreshed.')

          scheduleTokenRefresh(refreshToken, async () => {
            console.log('Scheduled token refresh triggered.')
            await RefreshToken(refreshToken)
            console.log('Access token refreshed successfully after schedule.')
          })
        } catch (error) {
          console.error('Error refreshing access token:', error)
        }
      } else {
        console.log('Access token is still valid. Scheduling the next refresh...')
        scheduleTokenRefresh(refreshToken, async () => {
          console.log('Scheduled token refresh triggered.')
          await RefreshToken(refreshToken)
          console.log('Access token refreshed successfully after schedule.')
        })
      }
    }
    initializeAuth()
  }, []) // Empty dependency array ensures this runs once when the component mounts

  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Suspense
          fallback={
            <div className="pt-3 text-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          }
        >
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
