import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import {HiShoppingBag} from 'react-icons/hi'
import {BsStarFill} from 'react-icons/bs'
import {ImVolumeDecrease} from 'react-icons/im'
import {AiOutlineHeart} from 'react-icons/ai'

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 198.00;
  const totalPrice = quantity * pricePerUnit;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className='product'>
        <div className='product-main-top'>
          <div className='main-image'><img src={require('../../assets/image.png')} alt=""/></div>
          <div className='main-image-svg'>
            <AiOutlineHeart className='svg-heart'/>
            <HiShoppingBag className='svg-bag'/>
            <ImVolumeDecrease className='svg-volume'/>
          </div>
        </div>
        <div className='product-main-bottom'>
            <section className='product-header-section'>
              <div className='product-header-div'>
                <div className='product-header-left'>
                  <h1>Roller Rabbit</h1>
                  <h2> Vado Odelie Dress</h2>
                  <p><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/> <span>(320 Review)</span></p>
                </div>
                <div className='product-header-right'>
                  <div className='product-quantity-div'>
                    <div className='product-quantity-div-wrap'>
                      <button onClick={handleDecrement} disabled={quantity === 1}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  </div>
                  <div className='product-quantity-stock'>
                    <p>Available in Stock</p>
                  </div>
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
                  <h5>Total Price</h5>
                  <h2>${totalPrice}</h2>
                </div>
                <div className='price-buttons-right'>
                <Link to="/payment">
                  <button>
                    <HiShoppingBag/><span>Buy Now</span>
                  </button>
                </Link>
                </div>
              </div>
            </section>
        </div>
    </div>
  )
}
