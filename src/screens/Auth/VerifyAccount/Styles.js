import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors/Colors";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: _generalSize(16),
      backgroundColor: getThemeColor("background", theme),
    },
    mailContainer: { flex: 1, alignItems: "center", justifyContent: "flex-end" },
    textStyle: { maxWidth: "60%", textAlign: "center" },
    buttonContainer: { flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "center" },
  });
};

export default getStyles;
