import React from 'react'
import styles from "./navbar.module.css"
import cartImage from "../../assets/Basket.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("userId")
        navigate("/login")
    }
  return (
    <div className={styles.navbarContainer}>
      <p>Home</p>
      {localStorage.getItem("userId") ? <p onClick={handleLogout}>Logout</p> : <p onClick={() => navigate("/login")}>Login</p>}
      <div className={styles.cart}>
        <img src={cartImage} alt="cart-image" />
        <p>0</p>
      </div>
    </div>
  )
}

export default Navbar
