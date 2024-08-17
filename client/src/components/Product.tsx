/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import { Link } from 'react-router-dom'
import { IconCartProduct,IconWishList } from './Icon'
import useCartStore from '../cartStore'
interface Props{
  id :number,
  image: string,
  name: string,
  price: number,
  price_sales?:number,
}
const Product: React.FC<Props>=(props)=> {
  const urlImage= `${process.env.REACT_APP_PUBLIC_URL}/product/`
  const   {id, image, name, price, price_sales}= props

  const addToCart =useCartStore((state)=> state.addToCart);
  const updateCart= useCartStore((state)=> state.updateCart)
  const cart = useCartStore((state)=> state.cart)
  const handleAddToCart=()=> {
    const newCartItem = { id, name, price, price_sales, image, quantity: 1}
    
    const itemExisted = cart.find((item)=> item.id === id);
    if(itemExisted){
      itemExisted.quantity++;
      updateCart(itemExisted);
      
    }
    else{
      addToCart(newCartItem);
    }
    
    
    // addToCart(newCartItem);
  }
  return (
	
<div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
	<div className="absolute z-10 top-0 left-0 right-0 flex items-center justify-between px-5 py-2">
		<div className="text-base text-slate-400">laptop</div>
		<IconWishList/>
	</div>
    <Link to={"http://localhost:3000/product/"+id} className='group-hover:-translate-y-7 '>
        <img className="p-8 rounded-t-lg group-hover:-translate-y-7 transition-transform ease-in duration-200" src={urlImage+image} alt="product image" />
    
    </Link>
    <div className="p-5 group-hover:-translate-y-7 transition-transform ease-in duration-200" >
        <Link to={"http://localhost:3000/product/"+id}>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 h-16 dark:text-white hover:text-blue-600  overflow-hidden ">{name}</h5>
        </Link>
        {price_sales ? ( <span className="text-lg font-bold text-gray-800 dark:text-white">{price_sales.toLocaleString('vi', {style : 'currency', currency : 'VND'})} <span className=' line-through'>{price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span></span>): (<span className="text-lg font-bold text-gray-800 dark:text-white">{price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>)}
       
    </div>
	<div className=' absolute bottom-0 left-0 right-0'>
		<div onClick={handleAddToCart} className="  translate-y-5 flex items-center justify-between bg-blue-700 px-5 pb-2 rounded-b-lg transform transition-transform ease-in duration-200 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 hover:bg-blue-800 hover:cursor-pointer ">
			<Link to="#" className="text-white   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm vào giỏ hàng</Link> 
			<IconCartProduct fill='rgb(255,255,255)' />
		</div>
	</div>
</div>



  )
}

export default Product