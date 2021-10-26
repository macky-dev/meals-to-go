import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";

import Spacer from "../spacer/spacer.component";
import Text from "../typography/text.component";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsVerticalScrollIndicator={false}>
        {favourites.map((restaurant) => (
          <Spacer key={restaurant.placeId} position="left" size="medium">
            <TouchableOpacity
              onPress={() => {
                onNavigate("RestaurantDetail", { restaurant });
              }}
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouriteBar;
