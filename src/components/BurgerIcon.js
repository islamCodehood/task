import React from 'react';

const BurgerIcon = () => {
    const openSideNav = () => {
        const sideNav = document.querySelector('.side-nav')
        sideNav.style.width = "100%";
    }
    return ( 
        <div className="burger-icon" onClick={openSideNav}>
                <div className="top"></div>
                <div className="middle"></div>
                <div className="bottom"></div>
        </div>
     );
}
 
export default BurgerIcon;