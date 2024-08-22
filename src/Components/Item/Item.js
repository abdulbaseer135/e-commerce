import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id,title,image,price,}) => {

  return (
    <div className='item'>
      <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="" /></Link>


       <p>{title}</p>
      <div className="item-prices">
        <div className="item-price-old">
            ${price}
        </div>
        <div className="item-price-new">
            ${price}
        </div>
      </div>
    </div>
  )
}

export default Item
