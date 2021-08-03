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

      envelopeView: {
          flex:1,
          flexDirection:'column',
          justifyContent:'flex-end',
      },

      aligner: {

        alignSelf:'center'
      }
    
  });
};

export default getStyles;