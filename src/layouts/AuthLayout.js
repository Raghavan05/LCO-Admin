import React from 'react'
import { Outlet } from 'react-router'
import "../styles/sections/AuthLayout.scss";

const AuthLayout = () => {
  return (
    <div className='pg-wrapper'>
        <Outlet />
    </div>
  )
}

export default AuthLayout