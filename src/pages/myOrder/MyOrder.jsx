import React from "react";
import styles from "./myorder.module.css";
import { useCart } from "../../components/Context/CartItemcontext";
import Navbar from "../../components/navbar/Navbar";
const MyOrder = () => {
  const { order } = useCart();
  return (
    <div className={styles.orderContainer}>
      <Navbar />
      <h2>Your Order</h2>
      <div className={styles.itemsWrapper}>
      <div className={styles.itemsContainer}>
        {order?.length > 0 ? (
          order.map((item) => (
            <div className={styles.item} key={item.id}>
              <img src={item.images[0]} alt="image" />
              <div className={styles.quantity}>
              <h3>${item.totalPrice}</h3>
              <h3>{item.quantity}x</h3>
              </div>
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <p>Your order is empty</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default MyOrder;
