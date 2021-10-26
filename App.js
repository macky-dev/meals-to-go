import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import Navigation from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCptfS2c29IuM8gKiZCcjD3Kc37lTD4Rco",
  authDomain: "mealstogo-app-96bba.firebaseapp.com",
  projectId: "mealstogo-app-96bba",
  storageBucket: "mealstogo-app-96bba.appspot.com",
  messagingSenderId: "309769445917",
  appId: "1:309769445917:web:10091aad8e43ac23275cf4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });

  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
