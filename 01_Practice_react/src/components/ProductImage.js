import React from 'react';

function ProductImage({ selectedVariant }) {

  if (!selectedVariant) return null;
  return (
    <div className="product-image">
      <div className="image"><img src={selectedVariant.imageURL} alt="" /></div>
    </div>
  )
}
export default ProductImage;