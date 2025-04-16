import React from 'react'
import styles from "./cart.module.css"
import Navbar from '../../components/navbar/Navbar'
import { useCart } from '../../components/Context/CartItemcontext'

const Cart = () => {
    const {cart,setCart} = useCart()
    const handleRemoveItem = (item) => {
        setCart((previous) => {
            return previous.map((i) =>{
                if(i.id === item.id){
                    if(i.quantity > 1){
                        return{
                            ...i,
                            quantity: i.quantity - 1,
                            totalPrice: (i.quantity - 1) * i.price
                        }
                    }else{
                        return previous.filter((i) => i.id !== item.id)
                    }
             
                }
            })
        })
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
      </div>
    </div>
  )
}

export default Cart
