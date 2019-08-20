import React from 'react';
import OutputItem from './OutputItem'
const OutputList = props => {
        return ( 
            <ul>
                {
                    props.itemsList.map(item => (
                        <OutputItem title={item.title} link={item.link} summary={item.summary} removeItem={props.removeItem} />
                    ))
                }
            </ul>
         );
}
 
export default OutputList;
