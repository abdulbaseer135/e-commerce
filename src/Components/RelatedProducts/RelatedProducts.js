import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <div className="realtedproducts-item">
      {data_product.map((item,index)=>{
               return <Item key={index} id={item.id} title={item.title} image={item.image} price={item.price}/>
            })}
      </div>
    </div>
  )
}

export default RelatedProducts
