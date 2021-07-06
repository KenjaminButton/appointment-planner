import React from "react";
import { Tile } from '../tile/Tile.js'

export const TileList = ({data}) => {
  return (
    <div>
      {data.map( (value, index) => <Tile value={value} key={index} /> )}
    </div>
  );
};
