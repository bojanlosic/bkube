import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import getThemeColor from "../../../constants/colors/getThemeColor";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor("background", theme),
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  });
};

export default getStyles;
