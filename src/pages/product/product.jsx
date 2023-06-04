import React from 'react';
import './product.css';

const product = () => {
  return (
    <div className='product'>
        <div className='product-main-top'>
          <div className='main-image'><img src={require('../../assets/image.png')} alt=""/></div>
        </div>
        <div className='product-main-bottom'>
            <section className='product-header-section'>
              <div className='product-header-div'>
                <div className='product-header-left'>
                  <h1>Roller Rabbit</h1>
                  <p> Vado Odelie Dress</p>
                  <p> ***** (320 Review)</p>
                </div>
                <div className='product-header-right'>
                  <div className='product-quantity-div'>
                    <button>- 1 +</button>
                  </div>
                  <p>Available in Stock</p>
                </div>
              </div>
            </section>
            <section className='product-size-section'>
              <div className='product-size-section-div'>
                <h1>Size</h1>
              </div>
              <div className='product-size-sizes'>
                <div className='product-sizes'>S</div>
                <div className='product-sizes'>M</div>
                <div className='product-sizes'>L</div>
                <div className='product-sizes'>XL</div>
                <div className='product-sizes'>XXL</div>
              </div>
            </section>
            <section className='product-description-section'>
              <div className='product-description-div'>
                <h2>Description</h2>
                <p>Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
              </div>
            </section>
            <section className='product-price-buttons-section'>
              <div className='product-price-buttons-div'>
                <div className='price-buttons-left'>
                  <h7>Total Price</h7>
                  <h2>$198.00</h2>
                </div>
                <div className='price-buttons-right'>
                  <button>Buy Now</button>
                </div>
              </div>
            </section>
        </div>
    </div>
  )
}

export default product