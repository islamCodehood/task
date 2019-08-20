import React, { Component } from 'react';
import OutputItemTitle from './OutputItemTitle'
import OutputItemLink from './OutputItemLink'
import OutputItemSummary from './OutputItemSummary'
class OutputItem extends Component {
    state = {  }
    render() { 
        return ( 
                <li>
                    <OutputItemTitle value={this.props.title} />
                    <OutputItemLink value={this.props.link} />
                    <OutputItemSummary value={this.props.summary} />
                </li>
         );
    }
}
 
export default OutputItem;