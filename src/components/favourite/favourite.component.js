import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteWrapper = styled.TouchableOpacity`
  position: absolute;
  z-index: 77;
  top: 25px;
  right: 25px;
`;

const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((fav) => {
    return fav.placeId === restaurant.placeId;
  });

  return (
    <FavouriteWrapper
      onPress={() => {
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant);
      }}
    >
      <AntDesign
        size={24}
        name={isFavourite ? "heart" : "hearto"}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteWrapper>
  );
};

export default Favourite;
