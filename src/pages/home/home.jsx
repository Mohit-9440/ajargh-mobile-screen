import React from 'react';
import './home.css';
import Products from '../../components/Products/Products';
import {HiUser} from 'react-icons/hi'
import {GoBell } from "react-icons/go";
import {IoCartSharp} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {FaSearch} from 'react-icons/fa'

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
        <section className='search-filter-section'>
            <div className='search-div'>
                <FaSearch style={{marginLeft:'10px', fontSize:'20px'}}/>
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            </div>
            <div className='filter-div'>
                <img src={require('../../assets/filtter.png')} alt=""/>
            </div>
        </section>
        <section className='features-section'>
            <div class="features-div">
                <div className='features-img-wrapper'>
                    <img src={require('../../assets/features1.png')} alt=""/>
                    <img src={require('../../assets/features1.png')} alt=""/>
                </div>
            </div>
        </section>
        <section className='arrivals-section'>
            <div className='arrivals-div'>
                <div className='arrivals-head'>
                    <h1>New Arrivals</h1>
                    <p>View All</p>
                </div>
                <Products/>
            </div>
        </section>
        <section className='navigation-section'>
            <div className='navigation-div'>
                <div className='navigation-div-but nav-home'>
                    <div className='nav-home-svg'>
                        <AiFillHome />
                    </div>
                    Home
                </div>
                <div className='navigation-div-but'><IoCartSharp className='nav-icon'/></div>
                <div className='navigation-div-but'><GoBell className='nav-icon'/></div>
                <div className='navigation-div-but'><HiUser className='nav-icon'/></div>
            </div>
        </section>
    </div>
  )
}

export default Home