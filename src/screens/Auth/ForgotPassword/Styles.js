import { WHEN_PASSCODE_SET_THIS_DEVICE_ONLY } from "expo-secure-store";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors/Colors";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor("background", theme),
      paddingHorizontal: _generalSize(24),
    },

    headerView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    instructionsViewWrapper: {
      flex: 2,
      justifyContent: "space-evenly",
    },
  });
};

export default getStyles;
