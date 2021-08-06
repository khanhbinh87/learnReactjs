import React from 'react';

// Khai báo kiểu class -> Truy cập vào props -> Dùng this.props
// Truyen Props vao Thu Vien -> Goi Component (Kem theo cac Props cua thu vien)

export default function ProductContent({
  title,
  brand,
  variations,
  selectedVariant,
  updateSelectedVariant,
  ...props
}) {

  function formatPrice(price) {
    return new Intl
      .NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      })
      .format(price)
  }

  function renderPrice() {
    if (!selectedVariant) return null;
    const { percent, price } = selectedVariant;

    if (percent === 0) {
      return <div className="final-price">{formatPrice(price)}</div>
    }
    return (
      <>
        <div className="final-price">{formatPrice(price * (1 - percent))}</div>
        <div className="origin-price">{formatPrice(price)}</div>
        <div className="sale-price">-{percent * 100}%</div>
      </>
    )
  }
  let handleClickVariant = variant => {
    updateSelectedVariant(variant)
  }
  let handleAddToCart = () => {
    props && props.handleAddToCart && props.handleAddToCart();
  }

  return (
    <div className="product-content">
      <h3 className="title"><a href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html">{title}</a></h3>
      <p className="brand">Thương hiệu: {brand ? brand : 'No Brand'}</p>
      <p className="quantity">Còn lại: {selectedVariant && selectedVariant.quantity} Sản phẩm</p>
      <div className="wrapper-price">
        {renderPrice()}
      </div>
      <div className="wrapper-color">
        <div className="text">Màu sắc</div>
        <div className="list-color">
          <p className="color-text">{selectedVariant && selectedVariant.name}</p>
          <ul>
            {
              variations && variations.map(variant => {
                return <li
                  key={variant.id}
                  onClick={() => handleClickVariant(variant)}
                  className={variant.id === selectedVariant.id ? 'active' : ''}
                >
                  <img src={variant.imageURL} alt="Màu Đỏ" />
                </li>
              })
            }
          </ul>
        </div>
      </div> <button onClick={() => handleAddToCart()} className="add-to-cart">Add to cart</button>
    </div>

  )
}
