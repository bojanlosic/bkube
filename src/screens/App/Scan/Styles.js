import React from "react";
import { StyleSheet } from "react-native";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor("background", theme),
    },
    contentContainer: {
      flex: 1,
      backgroundColor: getThemeColor("darkMedium", theme),
    },
    header: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: getThemeColor("darkMedium", theme),
      paddingVertical: _generalSize(4),
      borderTopLeftRadius: _generalSize(16),
      borderTopRightRadius: _generalSize(16),
    },
    headerHandle: {
      borderWidth: _generalSize(2),
      width: _generalSize(50),
      borderRadius: _generalSize(16),
      borderColor: getThemeColor("textInputPlaceholder", theme),
    },
  });
};

export default getStyles;
