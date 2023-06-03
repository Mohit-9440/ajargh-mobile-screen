import React from 'react';
import './home.css';
import Products from '../../components/Products/Products';

const Home = () => {
  return (
    <div className='home'>
        <section className='menu-section'>
            <div className='menu-div'>
                <div><img src={require('../../assets/menu.png')} alt="menu"/></div>
                <div><img src={require('../../assets/user.png')} alt="user"/></div>
            </div>
        </section>
        <section className='title-section'>
            <div className='title-div'>
                <h1>Welcome,</h1>
                <h3>Our Fashions App</h3>
            </div>
        </section>
        <section className='search-section'>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </div>
        </section>
        <section className='features-section'>
            <div class="features-div">
                <img src={require('../../assets/features1.png')} alt=""/>
            </div>
        </section>
        <section className='arrivals-section'>
            <div className='arrivals-div'>
                <div className='arrivals-head'>
                    <h1>New Arrivals</h1>
                    <p>View All</p>
                </div>
                <Products/>
                {/* <div className='arrivals-products'>
                    <div className='arrivals-product'>
                        <img src={require('../../assets/product1.png')} alt=""/>
                        <h2>The Marc Jacobs</h2>
                        <p>Traveler Tote</p>
                        <p>$195.00</p>
                    </div>
                    
                </div>
                <div className='arrivals-products'>
                    <div className='arrivals-product'>
                        <img src={require('../../assets/product1.png')} alt=""/>
                        <h2>The Marc Jacobs</h2>
                        <p>Traveler Tote</p>
                        <p>$195.00</p>
                    </div>
                    <div className='arrivals-product'>
                        <img src={require('../../assets/product2.png')} alt=""/>
                        <h2>Axel Arigato</h2>
                        <p>Clean 90 Triple Sneakers</p>
                        <p>$245.00</p>
                    </div>
                </div> */}
            </div>
        </section>
        <section className='navigation-section'>
            <div className='navigation-div'>
                <div>Home</div>
                <div>Cart</div>
                <div>Notif</div>
                <div>User</div>
            </div>
        </section>
    </div>
  )
}

export default Home