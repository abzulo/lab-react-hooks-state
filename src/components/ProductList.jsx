import React from 'react'

// The test expects this array
export const sampleProducts = [
  { id: 1, name: 'Apple', category: 'Fruits', price: 1.0, status: 'In Stock' },
  { id: 2, name: 'Milk', category: 'Dairy', price: 2.5, status: 'Out of Stock' },
  { id: 3, name: 'Banana', category: 'Fruits', price: 0.5, status: 'In Stock' },
  { id: 4, name: 'Cheese', category: 'Dairy', price: 3.0, status: 'In Stock' }
]

const ProductList = ({ category, cart, setCart }) => {
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category)

  const addToCart = product => {
    if (!cart.includes(product)) {
      setCart([...cart, product])
    }
  }

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map(product => (
          <div
            key={product.id}
            className={`card ${product.status === 'Out of Stock' ? 'outOfStock' : ''}`}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Status: {product.status}</p>
            <button
              data-testid={`product-${product.id}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
