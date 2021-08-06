import React from "react";
import { StyleSheet } from "react-native";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor("background", theme),
      padding: _generalSize(16),
    },
    shelterContainer: {
      flex: 1,
      alignItems: "center",
      marginTop: _generalSize(16),
    },
    shelterDirectionButton: { flex: 1, marginHorizontal: _generalSize(4) },
    contentContainer: {
      height: "100%",
      paddingHorizontal: _generalSize(16),
      backgroundColor: getThemeColor("darkMedium", theme),
    },
    shadowContainer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#000',
    },
  });
};

export default getStyles;
