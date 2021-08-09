import React from "react";
import { StyleSheet } from "react-native";
// import Colors from "../../../constants/Colors";
import { colors as Colors } from "@colors";
import { defaultColors } from "../../../constants/colors/Colors";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _fontSize, _generalSize } from "../../../constants/sizeCalculator";
import { WHEN_PASSCODE_SET_THIS_DEVICE_ONLY } from "expo-secure-store";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor("background", theme),
      paddingHorizontal: _generalSize(16),
    },
    buttonSpace: {
      marginBottom: _generalSize(14),
    },
    inputAndInstructionsFlex: {
      flex: 1,
      justifyContent: "space-around",
    },
  });
};

export default getStyles;
