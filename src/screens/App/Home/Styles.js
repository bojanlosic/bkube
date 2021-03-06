import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";

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
    contentContainer: {
      height: "100%",
      paddingHorizontal: _generalSize(12),
      backgroundColor: getThemeColor("darkMedium", theme),
    },
    header: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: getThemeColor("darkMedium", theme),
      paddingTop: _generalSize(4),
      paddingBottom: _generalSize(12),
      borderTopLeftRadius: _generalSize(16),
      borderTopRightRadius: _generalSize(16),
    },
    bottomSheetInfo: {
      marginHorizontal: _generalSize(6),
    },
    headerHandle: {
      borderWidth: _generalSize(2),
      width: _generalSize(50),
      borderRadius: _generalSize(16),
      borderColor: getThemeColor("textInputPlaceholder", theme),
    },
    sheltersContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: _generalSize(12) },
    sheltersGrid: { flex: 1 / 3, marginBottom: _generalSize(12), paddingHorizontal: _generalSize(6), height: _generalSize(170) },
    shelterContainer: {
      flex: 1,
      backgroundColor: getThemeColor("darkMedium2", theme),
      alignItems: "center",
      justifyContent: "space-between",
      padding: _generalSize(16),
      borderRadius: _generalSize(4),
    },
  });
};

export default getStyles;
