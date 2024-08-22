
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { AppContext } from '../AppContext';
import data_product from '../Components/Assets/data';
import new_collections from '../Components/Assets/new_collections';


const Product = () => {
  const { allProducts, loading } = useContext(AppContext);
  const { productId } = useParams();

  if (loading) {
    return <div>Loading...</div>;
  }
  const totalProducts = [...allProducts, ...data_product,...new_collections];
  if (!totalProducts) {
    return <div>Error loading products</div>;
  }

  const parsedProductId = Number(productId);
  const product = totalProducts.find(e => e.id === parsedProductId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;