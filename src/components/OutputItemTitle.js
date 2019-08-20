import React from 'react';
import RemoveButton from './RemoveButton';

const OutputItemTitle = props => {
    return ( 
        <div>
            <h2>
                {props.value}
            </h2>
            <RemoveButton removeItem={props.removeItem} />
        </div>
     );
}
 
export default OutputItemTitle;