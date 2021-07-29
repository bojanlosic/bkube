import React from "react";
import { StyleSheet } from "react-native";
// import Colors from "../../../constants/Colors";
import { colors as Colors } from "@colors";
import { defaultColors } from "../../../constants/colors/Colors";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _fontSize, _generalSize } from "../../../constants/sizeCalculator";

const getStyles = (theme) => {
  return StyleSheet.create({
    scrollviewContainer: { flex: 1 },
    container: { backgroundColor: "transparent", paddingHorizontal: 16, paddingBottom: 20 },
    dontHaveAccContainer: { flexDirection: "row", justifyContent: "center", marginTop: _generalSize(12) },
    orContainer: { marginVertical: _generalSize(20), alignItems: "center" },
  });
};

export default getStyles;
