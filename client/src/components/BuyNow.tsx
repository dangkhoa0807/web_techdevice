import React from 'react'
import { buyNow } from '../pages/client/Home'
interface Props{
	buyNow: buyNow
}
const  BuyNow :React.FC<Props>=(props) =>{
	const urlImage ="/images/"
	const {buyNow} = props
  return (
	<div className='my-20 relative'>
		<img src={urlImage+buyNow.image} alt="" />
		<div className=' absolute top-8 left-5 font-bold text-xl'>
			{buyNow.label}
		</div>
		<button className=' absolute bottom-8 left-5 font-bold text-sm hover:underline'> Buy Now</button>
	</div>
  )
}

BuyNow.propTypes = {}

export default BuyNow
