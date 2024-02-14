import React from 'react'

interface ProductProps {
  product: {
    code: string
    product_name: string
    image_thumb_url: string
  }
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div key={product.code} style={{ margin: '10px' }}>
      {product.product_name}
      <img src={product.image_thumb_url} alt={product.product_name} />
    </div>
  )
}

export default Product
