import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button.component'
import CartItem from '../cart-item/cart-item.component'
import {CartDropdownContainer, EmpytMessage, CartItems } from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
  const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext)
  const navigate = useNavigate()

  const toggleCartOff = ()=> setIsCartOpen(false)

  const goToCheckoutHandler = () =>{
    navigate('/checkout')
    toggleCartOff()
  }


  return (
    <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? cartItems.map(item=> <CartItem key={item.id} cartItem={item}/>)
          : <EmpytMessage>Cart is empty</EmpytMessage> }
        </CartItems>
        <Button onClick={goToCheckoutHandler}>checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown