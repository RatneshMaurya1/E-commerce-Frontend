import { createContext,useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const [order,setOrder] = useState([])
    const [details,setDetails] = useState(null)
    return(
        <CartContext.Provider value={{cart,setCart,setOrder,order,setDetails,details}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)