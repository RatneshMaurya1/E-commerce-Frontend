import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import { CartProvider } from './components/Context/CartItemcontext'
import Cart from './pages/cart/Cart'
import MyOrder from './pages/myOrder/MyOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<MyOrder/>} />
    </Routes>
    <Toaster/>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
