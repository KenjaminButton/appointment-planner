import React from "react";
import { Tile } from '../tile/Tile.js'

export const TileList = ({objectsInArray}) => {
  return (
    <div>
      {objectsInArray.map( (value, index) => <Tile value={value} key={index} /> )}
    </div>
  );
};
