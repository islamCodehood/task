import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav>
                <ul>
                <li className="active"><a href="/#">Industrial Automation</a></li>
                    <li><a href="/#">Outsourcing</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Knowledge hub</a></li>
                    <li><a href="/#">Innovation</a></li>
                    <li><a href="/#">Careers</a></li>
                    <li><a href="/#">Connect</a></li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;