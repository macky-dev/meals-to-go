import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantScreen from "../../features/restaurants/screens/restaurants.screen";
import RestaurantDetail from "../../features/restaurants/screens/restaurant-detail.screen";

const Stack = createStackNavigator();

const RestaurantNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

export default RestaurantNavigator;
