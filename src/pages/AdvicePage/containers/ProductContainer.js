import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Spinner } from '../../../components';
import { PRODUCTS_QUERY } from '../../../services/apollo/queries';
import Product from '../components/ProductCard';

const ProductContainer = ({ ids }) => {
  let { id } = useParams();
  const { data, loading, error } = useQuery(PRODUCTS_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  const productsInAdvice = data.getProducts.filter((product) =>
    ids.some((id) => id.id === product.id)
  );
  return (
    <div className="row">
      {productsInAdvice &&
        productsInAdvice.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default ProductContainer;
