import React from 'react'

const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.0, inStock: true },
  { id: 2, name: 'Milk', category: 'Dairy', price: 2.5, inStock: false }
]

const ProductList = ({ category, cart, setCart }) => {
  const filteredProducts = sampleProducts.filter(
    (p) => (category === 'all' || p.category === category) && p.inStock
  )

  if (filteredProducts.length === 0) {
    return <p>No products available</p>
  }

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          <button
            data-testid={`product-${product.id}`}
            onClick={() => setCart([...cart, product])}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList

