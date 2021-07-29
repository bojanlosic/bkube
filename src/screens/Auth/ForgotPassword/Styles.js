import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../../constants/colors/Colors";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";

const getStyles = (theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getThemeColor('background', theme),
    },

    headerView: {

      display: 'flex',
      flexDirection: 'row',
      paddingLeft:_generalSize(20),
    },

    
  });
};

export default getStyles;
