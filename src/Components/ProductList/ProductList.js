import React, { useContext } from 'react';
import './ProductList.css'
import { AppContext } from '../../AppContext';
import ListItems from '../ListItems/ListItems';
import sale from '../Assets/sale_offer.PNG'

const ProductList = () => {
  const { allProducts,loading } = useContext(AppContext);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
      <img className='product-list-banner' src={sale} alt="" />
      <ul className='product-list-list'>
        {allProducts.map((product) => (
          <ListItems key={product.id} id={product.id} product={product} title={product.title} description={product.description} image={product.image} price={product.price}/>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
