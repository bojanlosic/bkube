import { Platform } from "react-native";

export const _fontSize = (fontSize) => {
  if (Platform.OS === "android") {
    return fontSize - (fontSize / 100) * 10;
  }
  return fontSize;
};

export const _imageSize = (size) => {
  if (Platform.OS === "android") {
    return size - (size / 100) * 10;
  }
  return size;
};

export const _generalSize = (size) => {
  if (Platform.OS === "android") {
    return size - (size / 100) * 10;
  }
  return size;
};
