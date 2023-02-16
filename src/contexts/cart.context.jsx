import { createContext,  useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) =>{
    let existingCartItem = cartItems.find(item=> item.id === productToAdd.id)
    if (existingCartItem) return (cartItems.map(item => item.id === productToAdd.id ? 
        {...item, quantity: item.quantity + 1} : item))
    
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(item=> item.id === cartItemToRemove.id)
    
    if (existingCartItem.quantity === 1) return cartItems.filter(item => item.id !== cartItemToRemove.id)

    return cartItems.map(item => item.id === cartItemToRemove.id ? 
        {...item, quantity: item.quantity - 1} : item)
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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: `SET_IS_CART_OPEN`
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action)=>{
    const {type, payload} = action

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {...state, ...payload}
            
            case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {...state, isCartOpen: payload}

        default: 
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({children}) =>{

    const [{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE)
        
    const updateCartItemReducer = cartItems =>{
        const newCartTotal = cartItems.reduce((total, current) => total + current.quantity * current.price, 0)
        const newCartCount = cartItems.reduce((total, current) => total + current.quantity, 0)

        const payload = {
            cartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal,
          };
      
          dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
        };


    const addItemToCart = (productToAdd)=>{
       const newCartItems = (addCartItem(cartItems, productToAdd ))
       updateCartItemReducer(newCartItems)
    }
    
    const removeItemFromCart = (cartItemToRemove)=>{
        const newCartItems = (removeCartItem(cartItems, cartItemToRemove ))
        updateCartItemReducer(newCartItems)
    }
    
    const clearItemFromCart = (cartItemToClear)=>{
        const newCartItems = (clearCartItem(cartItems, cartItemToClear ))
        updateCartItemReducer(newCartItems)
    }

    const setIsCartOpen = bool => dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    
    const value = {isCartOpen, cartTotal, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart}
    
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}