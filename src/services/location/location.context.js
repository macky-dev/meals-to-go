import React, { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Toronto");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchTerm) => {
    setIsLoading(true);
    setKeyword(searchTerm);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        keyword,
        location,
        isLoading,
        error,
        search: onSearch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
