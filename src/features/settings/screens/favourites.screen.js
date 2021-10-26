import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import Spacer from "../../../components/spacer/spacer.component";
import RestaurantInfo from "../../restaurants/components/restaurant-info.component";
import SafeArea from "../../../components/utility/safe-area.component";
import Text from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesContainer = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;

const RestaurantScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        keyExtractor={(item) => `r-${item.placeId}`}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          </Spacer>
        )}
      />
    </SafeArea>
  ) : (
    <NoFavouritesContainer>
      <Text variant="label">No favourites yet</Text>
    </NoFavouritesContainer>
  );
};

export default RestaurantScreen;
