import React from 'react'

import Product from './Product';
import { IProduct } from '../interface'

interface Props{
  products: IProduct[];
}
const  CollectionProduct: React.FC<Props>=(props)=> {
  const {products}= props;

  return (
    <>
    {products.map((product :IProduct)=>{
      return (
        <Product key={product.id} id={product.id} image={product.image} name={product.name} price={product.price} price_sales={product.price_sale}/>
      )
    })}
    </>
  )
}

export default CollectionProduct