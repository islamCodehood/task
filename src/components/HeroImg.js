import React from 'react';
import Logo from './Logo'
import NavBar from './NavBar'
import BurgerIcon from './BurgerIcon'
import SideNav from './SideNav'
import Carousel from './Carousel'

const HeroImg = () => {
    return ( 
        <div className="hero-img">
            <BurgerIcon />
            <SideNav />
            <div className="nav-wrapper">
                <Logo />
                <NavBar />
            </div>
            <Carousel />
        </div>
     );
}
 
export default HeroImg;
