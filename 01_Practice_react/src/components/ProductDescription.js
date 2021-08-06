import React from 'react';

export default function ProductDescription({ attrProducts, description }) {
  if (!attrProducts) return null;
  return (
    <div className="description">
      <ul className="extra-info">
        {attrProducts.map((o, index) => <li key={index}>{o.name === '' ? '' : `${o.name} :`}{o.value}</li>)}
      </ul>
      <div dangerouslySetInnerHTML={{
        __html: description
      }}>

      </div>
    </div>
  )
}