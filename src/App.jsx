import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/programs' element={<Programs/>} />
        <Route path='/programs/:speciality' element={<Programs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/myappointments' element={<MyAppointments/>} />
        <Route path='/appointments:programId'  element={<Appointments/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App