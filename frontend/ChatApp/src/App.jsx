import React from 'react'
import Navbar from './Components/Navbar'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignupPage'
import SettingsPage from './Pages/SettingsPage'
import ProfilePage from './Pages/ProfilePage' 

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore.js'

import { Loader } from "lucide-react"
import {Toaster} from "react-hot-toast";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className=" flex items-center justify-center h-screen">
      <Loader className='size-15 animate-spin' />
    </div>
  )

  return (
    <div  >

      <Navbar />


      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login/" />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={< LoginPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login/" />} />
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App
