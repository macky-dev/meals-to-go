import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Text from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`;

const ButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  z-index: 77;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  border-radius: 50px;
`;

const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera type={type} ref={(camera) => (cameraRef.current = camera)}>
        <ButtonWrapper
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
            );
          }}
        >
          <Ionicons name="camera-reverse" color="white" size={40} />
        </ButtonWrapper>
      </ProfileCamera>
    </TouchableOpacity>
  );
};

export default CameraScreen;
