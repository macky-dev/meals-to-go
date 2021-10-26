import React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -20px;
`;

const LoadingIndicator = () => {
  return (
    <LoadingView>
      <Loading size={50} animating={true} color={Colors.red800} />
    </LoadingView>
  );
};

export default LoadingIndicator;
