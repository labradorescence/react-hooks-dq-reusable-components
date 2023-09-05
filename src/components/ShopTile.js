import React from "react";
import PotionTile from "./PotionTile";

// Study me! What information do I require to work?
// How am I the same as InventoryTile? How am I different?

function ShopTile({ potion, addToInventory, children }) {
  return (
        <PotionTile
        children={children}
        potion = {potion}
        mutualHandle = {addToInventory}
      />
  );
}

export default ShopTile;
