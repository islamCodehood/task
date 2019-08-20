import React from 'react';
import RemoveButton from './RemoveButton';

const OutputItemTitle = props => {
    return ( 
        <div>
            <h2>
                {props.value}
            </h2>
            <RemoveButton removeItem={props.removeItem} timestamp={props.timestamp} />
        </div>
     );
}
 
export default OutputItemTitle;