import React from 'react';

const OutputItemLink = props => {
    return ( 
        <div className="item-link">
            <a href={props.value}>READ MORE</a>
        </div>
     );
}
 
export default OutputItemLink;