import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout.styles.scss'


const Checkout = () => {
    const {cartItems} = useContext(CartContext)
    

    
    const [products, setProducts] = useState(cartItems)
    // const {id, name, imageUrl, price, quantity} = products


    const description = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

    const decrementQuantity = (itemID) =>{
        let itemToDecrement = cartItems.find(item => item.id === itemID)
        const newQuantity = itemToDecrement.quantity === 0 ? 0 : itemToDecrement.quantity - 1

        itemToDecrement.quantity = newQuantity
        setProducts([...products, {itemToDecrement}])

    }
    const incrementQuantity = (itemID) =>{
        let itemToDecrement = cartItems.find(item => item.id === itemID)
        const newQuantity = itemToDecrement.quantity + 1

        itemToDecrement.quantity = newQuantity
        setProducts([...products, {itemToDecrement}])
    }

  return (
    <div className='checkout-container'>
        <div className='checkout-description'>
            {description.map(el=> <div key={description.indexOf(`${el}`)}>{el}</div>)}
        </div>
        <div className='checkout-item-display'>
                {cartItems.map(item=>(
                    <div key={item.id} className='checkout-product-container'>
                        <img src={item.imageUrl} alt={`${item.name}`} />
                        <div> {item.name}</div> 
                        <div> 
                            <span onClick={()=>{decrementQuantity(item.id)}}>{`< `}</span>
                            <span>{item.quantity}</span>
                            <span onClick={()=>{incrementQuantity(item.id)}}>{` >`}</span>
                        </div> 
                        <div> {item.price}</div> 
                        <div>x</div> 
                    </div>
                ))}
        </div>
    </div>
  )
}

export default Checkout