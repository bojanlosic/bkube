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
      paddingHorizontal: _generalSize(16),
      paddingBottom: _generalSize(20),
    },

      checkView: {
          flex:1,
          flexDirection:'column',
          justifyContent:'flex-end',
      },

      aligner: {

        alignSelf:'center',
        marginBottom: _generalSize(8)
      },


      checkImage: {
        alignSelf:'center',
        marginVertical:_generalSize(24)
      }
    
  });
};

export default getStyles;