import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { CartContext, CartProvider } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles"

// import {ReactComponent as CrwnLogo } from '../../assets/crown.svg' 


const Navigation = () =>{
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to={`/`} >
              {/* <CrwnLogo className='logo'/> */}
            </LogoContainer>
            <NavLinks>
              <NavLink to={'/shop'}>SHOP</NavLink>
                {
                  currentUser ?  (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : 
                  (<NavLink to={'/auth'}>SIGN IN</NavLink>)
                }
              <CartIcon/>
            </NavLinks>
            {/* if CartOpen tolled True then build the cart dropdown */}
            {isCartOpen && <CartDropdown/>} 
        </NavigationContainer>
            <Outlet/>
      </Fragment>
    )
  }
  
  export default Navigation
  
       