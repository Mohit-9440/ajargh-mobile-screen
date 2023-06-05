import React, { useState } from 'react';
import './payment.css'
import {FiLoader} from 'react-icons/fi'
import {TbBrandMastercard} from 'react-icons/tb'
import {AiOutlineCheckCircle, AiFillQuestionCircle} from 'react-icons/ai'
const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaymentReceived, setIsPaymentReceived] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
     // Perform validation
     const cardNumberPattern = /^\d{16}$/;
     const nameOnCardPattern = /^[A-Za-z\s]+$/;
     const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
     const securityCodePattern = /^\d{3}$/;
    // const errors = {};

    if (!cardNumberPattern.test(cardNumber)) {
      alert('Invalid card number');
      return;
    }

    if (!nameOnCardPattern.test(nameOnCard)) {
      alert('Invalid name on card');
      return;
    }

    if (!expirationDatePattern.test(expirationDate)) {
      alert('Invalid expiration date');
      return
    }

    if (!securityCodePattern.test(securityCode)) {
      alert('Invalid security code');
      return;
    }
      // Show payment processing dialog
      setIsProcessing(true);

      // Simulate payment processing delay
      setTimeout(() => {
        // Hide payment processing dialog and show payment received message
        setIsProcessing(false);
        setIsPaymentReceived(true);
        // Reset form
        setCardNumber('');
        setNameOnCard('');
        setExpirationDate('');
        setSecurityCode('');
      }, 2000); // Simulating a 2-second processing delay
  };

  return (
    <>
      <div className='payment-form'>
      <form onSubmit={handleSubmit}>
        <div className='payment-label'>
          <label htmlFor="cardNumber">Card Number</label>
        </div>
        <div className='payment-input'>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className='payment-label'>
          <label htmlFor="nameOnCard">Name on Card</label>
        </div>
        <div className='payment-input'>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
          />
        </div>
        <div className='expiration-security-wrap'>
        <div className='expiration-wrap'>
          <div className='payment-label'>
            <label htmlFor="expirationDate">Expiration Date</label>
          </div>
          <div className='payment-input'>
            <input
              type="text"
              id="expirationDate"
              name="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </div>
        </div>
        <div className='security-wrap'>
          <div className='payment-label security'>
            <label htmlFor="securityCode">Security Code <AiFillQuestionCircle/></label>
          </div>
          <div className='payment-input'>
            <input
              type="text"
              id="securityCode"
              name="securityCode"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
            />
          </div>
        </div>
          
        </div>
        

        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>

    </div>
      {isPaymentReceived && (
        <div className='payment-box received'>
          <AiOutlineCheckCircle style={{color:"green"}}/>
          <h3>Payment Received!</h3>
          <p>Your order is now on the way . Please</p>
          <p>check your email for the receipt</p>
          {/* <button onClick={() => setIsPaymentReceived(false)}>Close</button> */}
        </div>
      )}

      {isProcessing && (
        <div className='payment-box processing'>
          <FiLoader/>
          <h3>Payment is processing...</h3>
          <p>Please wait, do not close this screen</p>
        </div>
      )}
    </>
    
  );
};

export default PaymentForm;
