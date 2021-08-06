let variations = [
  {
    id: Math.ceil(Math.random() * 99999),
    price: 20000,
    name: 'Màu đen',
    quantity: 10,
    percent: 0.1,
    imageURL: '/images/black.jpg'
  },
  {
    id: Math.ceil(Math.random() * 99999),
    price: 22000,
    name: 'Màu đỏ',
    quantity: 5,
    percent: 0.15,
    imageURL: '/images/red.jpg'
  },
  {
    id: Math.ceil(Math.random() * 99999),
    price: 25000,
    name: 'Màu xanh',
    quantity: 2,
    percent: 0,
    imageURL: '/images/blue.jpg'
  }
]
let _selectedVariant = variations[1];
let state = {
  selectedVariant: _selectedVariant,
  title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm Edit',
  brand: undefined,
  variations,
  attrProducts: [
    {
      name: 'Chất liệu',
      value: 'polyester và thun'
    },
    {
      name: '',
      value: 'Thoát mồ hôi tốt'
    },
    {
      name: '',
      value: 'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát'
    },
    {
      name: '',
      value: 'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc'
    },
    {
      name: 'Chất liệu',
      value: 'polyester và thun'
    },
  ],
  description: `<h2>Chất liệu bền chặt&nbsp;</h2>
  &lt;p&gt;Test hjskhfk h&lt;/p&gt;
  &lt;p&gt;&lt;strong&gt;&lt;span style="background-color:#8e44ad"&gt;fhsdjkfhsk&amp;nbsp;
  hsdjkfk&amp;nbsp;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;
    <div>
    <p>Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết
        hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</p>
  </div>`,
  cart: 0
};

let stateHooks = {
  title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm Edit',
  brand: undefined,
  variations,
  attrProducts: [
    {
      name: 'Chất liệu',
      value: 'polyester và thun'
    },
    {
      name: '',
      value: 'Thoát mồ hôi tốt'
    },
    {
      name: '',
      value: 'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát'
    },
    {
      name: '',
      value: 'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc'
    },
    {
      name: 'Chất liệu',
      value: 'polyester và thun'
    },
  ],
  description: `<h2>Chất liệu bền chặt&nbsp;</h2>
  &lt;p&gt;Test hjskhfk h&lt;/p&gt;
  &lt;p&gt;&lt;strong&gt;&lt;span style="background-color:#8e44ad"&gt;fhsdjkfhsk&amp;nbsp;
  hsdjkfk&amp;nbsp;&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;
    <div>
    <p>Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết
        hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</p>
  </div>`,
};

export {
  stateHooks,
  _selectedVariant
};

export default state;