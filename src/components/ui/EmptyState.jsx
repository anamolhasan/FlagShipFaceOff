import React from 'react'
import { Link } from 'react-router'
import Button from './Button'

const EmptyState = () => {
  return (
    <div className='py-24 text-center'>
        <h1 className='mb-3 font-thin text-7xl text-gray-900'>No Data Fount</h1>
         <p className='mb-8 text-xl md:text-2xl text-gray-900'>
         Browse, Search Phones. Add Cart, Favorites.
        </p>
        <Link to={'/'}>
          <Button label={'Browse Phones'}/>
        </Link>
    </div>
  )
}

export default EmptyState