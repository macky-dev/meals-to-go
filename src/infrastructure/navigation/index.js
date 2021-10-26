import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import LoadingIndicator from "../../components/utility/loading-indicator.component";

import AppNavigator from "./app.navigator";
import AccountNavigator from "./account.navigator";

const Navigation = () => {
  const { isAuthenticated, isLoading } = useContext(AuthenticationContext);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
