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
      paddingHorizontal: _generalSize(16),
    },

    headerView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: _generalSize(32),
      marginBottom: _generalSize(32),
    },

    instructionsViewWrapper: {
      flex: 2,
      justifyContent: "space-evenly",
    },

    instructionsView: {
      paddingHorizontal: _generalSize(8),
    },
  });
};

export default getStyles;
