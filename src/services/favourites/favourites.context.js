import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (favouritesData, uid) => {
    try {
      await AsyncStorage.setItem(
        `@favourites-${uid}`,
        JSON.stringify(favouritesData),
      );
    } catch (e) {
      console.log("error in saving", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const favouritesData = await AsyncStorage.getItem(`@favourites-${uid}`);
      favouritesData !== null
        ? setFavourites(JSON.parse(favouritesData))
        : null;
    } catch (e) {
      console.log("error in loading", e);
    }
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((fav) => {
      return fav.placeId !== restaurant.placeId;
    });

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
