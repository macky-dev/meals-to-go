import React from "react";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};

export default MapCallout;
