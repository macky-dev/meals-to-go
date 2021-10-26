import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import Spacer from "../../../components/spacer/spacer.component";
import RestaurantInfo from "../components/restaurant-info.component";
import SafeArea from "../../../components/utility/safe-area.component";
import LoadingIndicator from "../../../components/utility/loading-indicator.component";
import FadeInView from "../../../components/animations/fade.animation";
import Search from "../components/search.component";
import FavouriteBar from "../../../components/favourite/favourite-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => {
          setIsToggled(!isToggled);
        }}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => `r-${item.placeId}`}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <FadeInView>
                <RestaurantInfo restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
