import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from './pages/_layouts/admin.tsx'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Complaints } from './pages/admin/complaints/complaints.tsx'
import { Details } from './pages/admin/details/details.tsx'
import { Feed } from './pages/app/feed/feed'
import { Profile } from './pages/app/profile/profile'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Feed /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      { path: '/complaints', element: <Complaints /> },
      { path: '/details/:complaintId', element: <Details /> },
    ],
  },
])
