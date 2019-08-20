import React from 'react';

const RemoveButton = props => {
    const handleClick = () => props.removeItem(props.timestamp)
    return ( 
            <div className="remove-btn" onClick={handleClick}>X</div>
     );
}
 
export default RemoveButton;