import React, { useEffect, useState } from 'react'
import { CartContext } from './Context'
import { getCart } from '../utility/localstorage'

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(()=>{
        //------- get localStorage
        setCart(getCart)
    },[])
  return (
    <CartContext.Provider value={{cart, setCart}}>
         {children}
    </CartContext.Provider>
  )
}

export default CartProvider