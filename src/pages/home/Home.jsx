import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.css";
import searchImage from "../../assets/search.png"

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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
                <div className={styles.addItem}>
                  <p>+</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
