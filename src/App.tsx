// App.tsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/layouts/RootLayout';
import ProtectedRoute from './utils/protected-route';

const routes = {
  public: {
    intro: lazy(() => import('@/pages/landing/IntroLanding')),
    home: lazy(() => import('@/pages/home/HomePage')),
    login: lazy(() => import('@/pages/auth/LoginPage')),
    signup: lazy(() => import('@/pages/auth/SignUpPage')),
    verify: lazy(() => import('@/pages/auth/VerifyEmailPage'))
  },
  app: {
    dashboard: lazy(() => import('@/pages/dashboard/Dashboard'))
  }
};

const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* Landing/Intro */}
        <Route path="/" element={<routes.public.intro />} />
        
        {/* Main Layout Routes */}
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/home" element={<routes.public.home />} />          
          <Route path="/login" element={<routes.public.login />} />
          <Route path="/signup" element={<routes.public.signup />} />
          <Route path="/verify-email/:token" element={<routes.public.verify />} />

          {/* Protected Routes */}
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
        <Route path="*" element={<routes.public.intro />} />
      </Routes>
    </Suspense>
  );
}