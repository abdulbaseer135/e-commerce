import React from 'react';
import './ListItems.css'
import { Link } from 'react-router-dom';

const ListItems = ({id,title,image,price}) => {

  return (
    
       <div key={id} className="listitem">
            <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="" /></Link>
            <p>{title}</p>
            <div>
              <div className="product-price">
                <div className="product-price-old">
                    ${price}
                </div>
                <div className="product-price-new">
                    ${price}
                </div>
                </div>
              
            </div>
          </div>



  
  
  )
}

export default ListItems