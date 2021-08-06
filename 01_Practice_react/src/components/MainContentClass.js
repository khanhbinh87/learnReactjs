import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';
import ProductContent from './ProductContent';

import initData from '../model/state';
// State -> Dữ liệu của Component do nó nắm giữ
// Props -> Dữ liệu được truyền vào từ Component lồng bên ngoài (Component cha)

export default class MainContentClass extends Component {
  constructor(props) {
    super(props);

    this.state = initData;
  }

  updateSelectedVariant = (variant) => {
    this.setState({
      cart: 0,
      selectedVariant: variant
    })
  }

  handleAddToCart = () => {
    let { cart, selectedVariant } = this.state;
    console.log("MainContentClass handleAddToCart run", cart, selectedVariant)
    if (cart === selectedVariant.quantity) {
      alert("Gio hang dat so luong toi da");
      return;
    }
    this.setState({
      cart: cart + 1
    })
  }

  render() {
    let { updateSelectedVariant, handleAddToCart, state } = this;
    let { title, brand, variations, selectedVariant, attrProducts, description, cart } = state;
    let injectedProps = {
      title,
      brand,
      variations,
      handleAddToCart,
      selectedVariant,
      updateSelectedVariant,
    }
    let injectedPropsProductDes = {
      description,
      attrProducts,
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
          <ProductDescription {...injectedPropsProductDes} />
        </div>
      </div>
    )
  }
}