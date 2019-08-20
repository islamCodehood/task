import React from 'react';

const RemoveButton = props => {
    const handleClick = () => props.removeItem()
    return ( 
        <div>
            <button onClick={handleClick}>X</button>
        </div>
     );
}
 
export default RemoveButton;