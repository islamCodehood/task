import React, { Component } from 'react';
import OutputItem from './OutputItem'
class OutputList extends Component {
    state = {  }
    render() { 
        return ( 
            <ul>
                {
                    this.props.itemsList.map(item => (
                        <OutputItem title={item.title} link={item.link} summary={item.summary} />
                    ))
                }
            </ul>
         );
    }
}
 
export default OutputList;
