import React from "react";

export const Tile = ({value}) => {
  const valuesInObject = Object.values(value);
  return (
    <div className="tile-container">
      {valuesInObject.map( (valueInObject, index) => {
        if (index === 0) {
          return <p className="tile-title" key={index}> {valueInObject} </p>
        } else {
          return <p className="tile" key={index}> {valueInObject} </p>
        }
      })}
    </div>
  );
};


