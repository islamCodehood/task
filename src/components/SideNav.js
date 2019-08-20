import React, { Component } from 'react';
import CloseButton from './CloseButton'

class SideNav extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="side-nav">
                    <CloseButton />
                <ul>
                    <li><a href="/#" className="active">Industrial Automation</a></li>
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

export default SideNav;