import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  position: absolute;
  z-index: 999;
  top: 25px;
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  const onSearch = () => {
    search(searchQuery);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={onSearch}
      />
    </SearchContainer>
  );
};

export default Search;
