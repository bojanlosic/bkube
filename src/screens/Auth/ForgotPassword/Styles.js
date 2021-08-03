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
      backgroundColor: getThemeColor('background', theme),
    },

    headerView: {

      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-between'
    },

    headerArrow: {

    paddingLeft:_generalSize(10),
    },

    headerText: {

      marginRight:_generalSize(10)
    },

    instructionsView: {

      paddingLeft:_generalSize(24),
      paddingTop:_generalSize(36),
    },

    inputView: {
      
      paddingLeft:_generalSize(16),
      paddingRight:_generalSize(16),
      marginTop:_generalSize(50)
    },

    buttonView: {
      
      paddingLeft:_generalSize(16),
      paddingRight:_generalSize(16),
    }
    
  });
};

export default getStyles;
