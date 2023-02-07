import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {}
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = {isCartOpen, setIsCartOpen}
    console.log('📡 // file: cart.context.jsx:11 // CartProvider // value', value)

    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}