import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import Text from "../typography/text.component";

const Container = styled.View`
  padding: 10px;
  max-width: 120px;
  justify-content: center;
  align-items: center;
`;

const CompactWebView = styled(WebView)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CompactImage = styled.Image`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <Container>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Container>
  );
};

export default CompactRestaurantInfo;
