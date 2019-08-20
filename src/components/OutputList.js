import React from "react";
import OutputItem from "./OutputItem";
const OutputList = props => {
  return (
    <ul className="list">
      {props.itemsList.map(item => (
        <OutputItem
          key={item.timestamp}
          title={item.title}
          link={item.link}
          summary={item.summary}
          timestamp={item.timestamp}
          removeItem={props.removeItem}
        />
      ))}
    </ul>
  );
};

export default OutputList;
