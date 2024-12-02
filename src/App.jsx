import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './context/userContext'

const App = () => {
  const ans =  useContext(UserDataContext)
  console.log(ans)
  return ( 
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/user-login' element={<UserLogin/>} />
      <Route path='/user-signup' element={<UserSignup/>} />
      <Route path='/captain-signin' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>} />
    </Routes>
    </div>
  )
}

export default App