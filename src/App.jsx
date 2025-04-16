import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </>
  )
}

export default App
