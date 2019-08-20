import React, { Component } from 'react';
import OutputItem from './OutputItem'
class OutputList extends Component {
    state = {  }
    render() { 
        return ( 
            <ul>
                <OutputItem />
            </ul>
         );
    }
}
 
export default OutputList;
