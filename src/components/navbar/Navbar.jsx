import React from 'react'
import styles from "./navbar.module.css"
import cartImage from "../../assets/Basket.png"
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartItemcontext'

const Navbar = () => {
    const navigate = useNavigate()
    const {cart} = useCart()

    const handleLogout = () => {
        localStorage.removeItem("userId")
        navigate("/login")
    }
  return (
    <div className={styles.navbarContainer}>
      <p onClick={() => navigate("/")}>Home</p>
      {localStorage.getItem("userId") ? <p onClick={handleLogout}>Logout</p> : <p onClick={() => navigate("/login")}>Login</p>}
      <div className={styles.cart}>
        <img onClick={() => navigate("/cart")} src={cartImage} alt="cart-image" />
        <p onClick={() => navigate("/cart")}>{cart.length}</p>
      </div>
    </div>
  )
}

export default Navbar
