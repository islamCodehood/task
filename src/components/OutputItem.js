import React, { Component } from 'react';
import OutputItemTitle from './OutputItemTitle'
import OutputItemLink from './OutputItemLink'
import OutputItemSummary from './OutputItemSummary'
class OutputItem extends Component {
    state = {  }
    render() { 
        return ( 
                <li>
                    <OutputItemTitle />
                    <OutputItemLink />
                    <OutputItemSummary />
                </li>
         );
    }
}
 
export default OutputItem;