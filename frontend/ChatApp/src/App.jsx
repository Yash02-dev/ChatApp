import React from 'react'
import Navbar from './Components/Navbar'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignupPage'
import SettingsPage from './Pages/SettingsPage'
import ProfilePage from './Pages/ProfilePage'

import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore'


const App = () => {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);
  console.log({authUser})

  return (
    <div  >

      <Navbar />


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={< LoginPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={< ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
