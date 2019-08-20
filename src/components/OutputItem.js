import React from 'react';
import OutputItemTitle from './OutputItemTitle'
import OutputItemLink from './OutputItemLink'
import OutputItemSummary from './OutputItemSummary'
const OutputItem = props => {

        return ( 
                <li>
                    <OutputItemTitle value={props.title} removeItem={props.removeItem}  />
                    <OutputItemSummary value={props.summary} />
                    <OutputItemLink value={props.link} />
                </li>
         );
}
 
export default OutputItem;