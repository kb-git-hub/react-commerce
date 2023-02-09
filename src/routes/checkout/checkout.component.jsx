import { useContext, useState } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss'


const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext)

    const headerDescriptions = ['Product', 'Description', 'Quantity', 'Price', 'Remove']


  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            {headerDescriptions.map(header=> {
                return <span className='header-block' key={headerDescriptions.indexOf(header)}>{header}</span>
            })}
        </div>
        {cartItems.map(item=> <CheckoutItem key={item.id} cartItem={item}/>)}
        <span className='total'> Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout
