import React from 'react'
import './product.css'
const Product = () => {
  return (
    <div className='product-wrap-arrivals'>
      <div className='arrivals-product'>
          <img src={require('../../assets/product1.png')} alt=""/>
          <p>The Marc Jacobs</p>
          <p style={{color: '#666666'}}>Traveler Tote</p>
          <p>$195.00</p>
      </div>
      <div className='arrivals-product'>
          <img src={require('../../assets/product2.png')} alt=""/>
          <p>Axel Arigato</p>
          <p style={{color: '#666666'}}>Clean 90 Triple Sneakers</p>
          <p>$245.00</p>
      </div>
    </div>
  )
}

export default Product