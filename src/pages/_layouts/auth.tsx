import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <Outlet />
      </div>
    </>
  )
}
