import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>{product.name} is in your cart</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
