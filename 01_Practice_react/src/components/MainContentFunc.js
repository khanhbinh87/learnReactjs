import React, { useState } from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductContent from './ProductContent';

import { stateHooks, _selectedVariant } from '../model/state';

export default function MainContentFunc() {
  // cach khai bao state trong react hook
  // useState
  const [cart, setCart] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(_selectedVariant);
  const [productData, setProductData] = useState(stateHooks)

  let updateSelectedVariant = (variant) => {
    setCart(0);
    setSelectedVariant(variant, () => {
      console.log("sau khi setSelectedVariant", selectedVariant);
    });
  }
  let handleAddToCart = () => {
    if (cart === selectedVariant.quantity) {
      alert("Gio hang dat so luong toi da");
      return;
    }
    setCart(cart + 1)
  }

  let injectedProps = {
    cart,
    ...productData,
    selectedVariant,
    handleAddToCart,
    updateSelectedVariant
  }
  return (
    <div className="container">
      <div className="list-blog">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum
          facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti,
        qui.</p>
      </div>
      <div id="app">
        <div className="cart">Giỏ hàng ({cart})</div>
        <div className="product">
          <ProductImage selectedVariant={selectedVariant} />
          <ProductContent {...injectedProps} />
        </div >
        <ProductDescription {...productData} />
      </div>
    </div>
  )
}