import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

const AuthRoutes = () => {
  return (
      <Routes>
        <Route path="login" elelment={<LoginPage/>}/>
        <Route path="register" elelment={ < RegisterPage/> }/>
        <Route path="/*" elelment={ < Navigate to="/"/> }/>
      </Routes>
  )
}

export default AuthRoutes
