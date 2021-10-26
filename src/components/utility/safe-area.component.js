import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight ? `marginTop: ${StatusBar.currentHeight}px` : null}
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export default SafeArea;
