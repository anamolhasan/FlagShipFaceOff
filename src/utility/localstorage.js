import toast from "react-hot-toast"

export const  getFavorite = () => {
   const favorites = localStorage.getItem('favorites')
   if(favorites) return JSON.parse(favorites)
    return []
}

export const addFavorite = (phone) => {
    const favorite = getFavorite()
    const isExist = favorite.find(p => p.id === phone.id)
    if(isExist) return toast.error('Phone Already Added')
    favorite.push(phone)
   toast.success('Phone Added Successfully')
   localStorage.setItem('favorites', JSON.stringify(favorite) )
}


export const removeFavorite = id => {
    const favorites = getFavorite()
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
    toast.dismiss('Remove Successfully')
}



// ----------------------------------------------------------------




export const  getCart = () => {
    const cart = localStorage.getItem('cart')
    if(cart) return JSON.parse(cart)
     return []
 }
 
 export const addToCart = (phone) => {
     const cart = getCart()
     const isExist = cart.find(p => p.id === phone.id)
     if(isExist) return toast.error('Phone Already Added')
     cart.push(phone)
     toast.success('Phone Added Successfully')
    localStorage.setItem('cart', JSON.stringify(cart) )
 }
 
 
 export const removeCart = id => {
     const cart = getCart()
     const remainingCart = cart.filter(phone => phone.id !== id)
     localStorage.setItem('cart', JSON.stringify(remainingCart))
 }