import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) =>{
    let existingCartItem = cartItems.find(item=> item.id === productToAdd.id)
    if (existingCartItem) return (cartItems.map(item => item.id === productToAdd.id ? 
        {...item, quantity: item.quantity + 1} : item))
    
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(item=> item.id === cartItemToRemove.id)
    
    if (existingCartItem.quantity === 1) return cartItems.filter(item => item.id !== cartItemToRemove.id)

    return (cartItems.map(item => item.id === cartItemToRemove.id ? 
        {...item, quantity: item.quantity - 1} : item))
}

const clearCartItem = (cartItems, cartItemToClear) =>  cartItems.filter(item => item.id !== cartItemToClear.id)


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=> {},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartCount: 0,
    cartTotal: 0
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, current) => total + current.quantity * current.price, 0)
        setCartTotal(newCartTotal)
    },[cartItems])
   
    useEffect(()=>{
            const newCartCount = cartItems.reduce((total, current) => total + current.quantity, 0)
            setCartCount(newCartCount)
    },[cartItems])

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd ))
    }
    
    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove ))
    }
    
    const clearItemFromCart = (cartItemToClear)=>{
        setCartItems(clearCartItem(cartItems, cartItemToClear ))
    }

    const value = {isCartOpen, cartTotal, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart}
    
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}