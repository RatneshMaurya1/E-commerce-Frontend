import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.css";
import searchImage from "../../assets/search.png"
import { useCart } from "../../components/Context/CartItemcontext";
import toast from "react-hot-toast";
import DetailsPopup from "../../components/detailsPopup/DetailsPopup";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen,setIsOpen] = useState(false)
  const {setCart,setDetails} = useCart()

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const response = await fetch(import.meta.env.VITE_API_PRODUCTS);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    };
    getItems();
  }, []);

  const handleAddItem = (item) => {
    if(!localStorage.getItem("userId")){
      toast.error("Please login to continue")
      return;
    }
    setCart((previous) => {
      const isItemExists = previous.find((i) => i.id === item.id)
      if(isItemExists){
        return previous.map((i) => {
          if(i.id === item.id){
            return{
              ...i,
              quantity: i.quantity + 1,
              totalPrice: (i.quantity + 1) * i.price
            }
          } 
          return i
        })
      }else{
        return[
          ...previous,
          {
            ...item,
            quantity:1,
            totalPrice:item.price
          }
        ]
      }
    })
    toast.success("Item added to cart.")
  }

  const handleDetails = (item) => {
    setIsOpen(true)
    setDetails(item)
  }

  const filteredItems = items
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 45);
  return (
    <div className={styles.homeContainer}>
      <Navbar />
  
      <div className={styles.itemsWrapper}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className={styles.searchImg} src={searchImage} alt="search-image" />
      </div>
        <div className={styles.itemsContainer}>
          {loading ? (
            <div className={styles.loader}>Loading...</div>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className={styles.item} key={item.id}>
                <img src={item.images[0]} alt="image" />
                <h3>${item.price}</h3>
                <p>{item.title}</p>
                <div className={styles.addItem} onClick={() => handleAddItem(item)}>
                  <p>+</p>
                </div>
                <div className={styles.details} onClick={() => handleDetails(item)}>
                  <p>Details</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <DetailsPopup
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default Home;
