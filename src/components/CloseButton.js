import React from 'react';

const CloseButton = props => {
    const closeSideNav = () => {
        const sideNav = document.querySelector('.side-nav')
        sideNav.style.width = "0px";
    }
    return ( 
        <div>
            <div className="close-btn" onClick={closeSideNav}>X</div>
        </div>
     );
}
 
export default CloseButton;


