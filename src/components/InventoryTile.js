import React from "react";
import PotionTile from "./PotionTile";

// Study me! What information do I require to work?
// How am I the same as ShopTile? How am I different?

function InventoryTile({ potion, sell, children }) {
  return (
    <PotionTile
      children={children}
      potion = {potion}
      mutualHandle = {sell}
    />
  );
}

export default InventoryTile;
