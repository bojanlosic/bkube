import React from "react";
import { StyleSheet } from "react-native";
import getThemeColor from "../../../constants/colors/getThemeColor";

const getStyles = (theme) => {
  return StyleSheet.create({
    scrollviewContainer: {
      flex: 1,
    },
    container: {
      backgroundColor: "transparent",
      paddingHorizontal: 16,
      paddingBottom: 20,
    },
  });
};

export default getStyles;
