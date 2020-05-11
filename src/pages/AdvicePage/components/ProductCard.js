import React from 'react';
import { BoxImage, Paragraph, Button } from '../../../components';

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="col-4">
      <BoxImage classN={'frame-image yes'} img={product.imageUrl} height={300} />
      <Paragraph classN={'advice__author'} text={product.description__en} tag={'p'} />
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <Button text={'FIND MORE'} />
      </a>
    </div>
  );
};

export default ProductCard;
