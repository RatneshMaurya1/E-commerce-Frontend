import React from 'react'
import styles from "./cart.module.css"
import Navbar from '../../components/navbar/Navbar'
import { useCart } from '../../components/Context/CartItemcontext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {cart,setCart,setOrder} = useCart()
    const navigate = useNavigate()
    const handleRemoveItem = (item) => {
        setCart((previous) => {
          const isItemExists = previous.find((i) => i.id === item.id)
          if(isItemExists && isItemExists.quantity > 1){
            return previous.map((i) => 
              i.id == item.id ? {
                ...i,
                quantity:i.quantity - 1,
                totalPrice: (i.quantity -1) * i.price
              }: i
            )
          }else{
            return previous.filter((i) => i.id !== item.id)
          }
        }) 
    }

    const handleAddItem = (item) => {
      setCart((previous) => {
        return previous.map((i) => 
          i.id === item.id ? {
            ...i,
            quantity:i.quantity + 1,
            totalPrice:(i.quantity + 1) * i.price
          } : i
        )
      })
    }

    const handleCheckout = () => {
      if(cart.length > 0){
        setOrder((prev) => [...prev,...cart])
        setCart([])
        toast.success("Order placed successfully")
        navigate("/order")
      }else{
        toast.error("Your cart is empty")
      }
    }
  return (
    <div className={styles.cartContainer}>
      <Navbar/>
      <div className={styles.cartItemsContainer}>
        <h2>Your cart</h2>
        {cart.length > 0 ? cart.map((item) => (
          <div className={styles.cartItem} key={item.id}>
            <div className={styles.cartItemDetails}>
            <img src={item.images[0]} alt="image" />
            <div className={styles.priceAndTitle}>
            <h3>${item.totalPrice}</h3>
            <p>{item.title}</p>
            </div>
            </div>

            <div className={styles.cartItemQuantity}>
                <div className={styles.removeItem} onClick={() => handleRemoveItem(item)}>
                    <p>-</p>
                </div>
                <p className={styles.quantity}>{item.quantity}</p>
                <div className={styles.addItem} onClick={() => handleAddItem(item)}>
                    <p>+</p>
                </div>
            </div>
          </div>
        )) : <p>Your cart is empty</p>}
        <div className={styles.checkout}>
          <div className={styles.totalPrice}>
          <p>TotalPrice:</p>
          <p>${cart.reduce((acc,item) => acc+item.totalPrice ,0)}</p>
          </div>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
