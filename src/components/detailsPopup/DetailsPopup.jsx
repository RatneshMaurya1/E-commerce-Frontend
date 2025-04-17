import React, { useEffect } from "react";
import styles from "./detailspopup.module.css";
import { useCart } from "../Context/CartItemcontext";

const DetailsPopup = ({ isOpen, setIsOpen }) => {
  const { details, setDetails } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div
      className={styles.detailsPopupWrapper}
      onClick={() => {
        setIsOpen(false), setDetails(null);
      }}
    >
      <div
        className={styles.detailsPopupContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Details</h2>
        <div className={styles.detailsPopupContent}>
          <img src={details?.images[0]} alt="image" />
          <h3>price: {details.price}</h3>
          <h4>{details.title}</h4>
          <p>{details.description}</p>
        </div>
        <div
          className={styles.closePopup}
          onClick={() => {
            setIsOpen(false), setDetails(null);
          }}
        >
          <p>X</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopup;
