import React, {  useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import Button from '../components/ui/Button'
import { MdOutlineAddShoppingCart, MdOutlineBookmarkAdd } from "react-icons/md";
import { addFavorite, addToCart, getCart } from '../utility/localstorage';
import { CartContext } from '../Provider/Context';


const PhoneDetails = () => {
  const {setCart} = useContext(CartContext)
  const data = useLoaderData()
  const {id} = useParams()

  const singlePhone = data.find(phone => phone.id === parseInt(id))
  const {
    name, 
    image, 
    brand, 
    model, 
    price, 
    description, 
    storage, 
    camera_info
  } = singlePhone || {}

  const handleFavorite = () => {
    addFavorite(singlePhone)
  }

  const handleCart = () => {
    // save to localstorage for persistency
    addToCart(singlePhone)
    // update state for instant ui change
    setCart(getCart())
  }
  return (
    <div className=' w-full py-12'>
         <img src={image} 
              alt="Banner Images" 
              className='w-full mx-auto md:w-auto mb-8' />
              {/* title and buttons */}
         <div className='flex justify-between'>
            <h1 className='text-6xl font-thin mb-8'>{name}</h1>
            <div className='space-x-4'>
              {/* <Button onClick={()=>setCart(prv => [...prv, singlePhone])} label={<MdOutlineAddShoppingCart />}/> */}
              <Button onClick={handleCart} label={<MdOutlineAddShoppingCart />}/>
              <Button onClick={handleFavorite} label={< MdOutlineBookmarkAdd />} />
            </div>
         </div>
         {/* Details */}
         <div></div>
    </div>
  )
}

export default PhoneDetails