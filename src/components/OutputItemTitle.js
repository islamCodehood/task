import React from 'react';
import RemoveButton from './RemoveButton';

const OutputItemTitle = props => {
    return (
      <div className="item-title">
        <RemoveButton
          removeItem={props.removeItem}
          timestamp={props.timestamp}
        />

        <h2>{props.value}</h2>
      </div>
    );
}
 
export default OutputItemTitle;