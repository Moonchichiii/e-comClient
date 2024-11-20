import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Lazy load routes
const routes = {
  auth: {
    login: lazy(() => import('./pages/auth/LoginPage')),
    signup: lazy(() => import('./pages/auth/SignUpPage')),
    verify: lazy(() => import('./pages/auth/VerifyEmailPage'))
  },
  app: {
    dashboard: lazy(() => import('@/pages/dashboard/Dashboard'))
  }
}

const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
)

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<routes.auth.login />} />
          <Route path="/signup" element={<routes.auth.signup />} />
          <Route path="/verify-email/:token" element={<routes.auth.verify />} />
        </Route>

        {/* Protected routes */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <routes.app.dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 404 catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  )
}