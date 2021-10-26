import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";

const Stack = createStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        options={{
          header: () => null,
        }}
        name="SettingsMain"
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerBackTitle: "Settings",
        }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerBackTitle: "Settings",
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
