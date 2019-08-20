import React from 'react';

const OutputItemLink = props => {
    return ( 
        <div className="item-link">
            <a href={props.value} target="_blank">READ MORE</a>
        </div>
     );
}
 
export default OutputItemLink;