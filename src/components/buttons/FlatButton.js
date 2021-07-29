import React from "react";
import { Text, TouchableOpacity } from "react-native";
import getThemeColor from "../../constants/colors/getThemeColor";
import fonts from "../../constants/fonts";
import { _fontSize, _generalSize } from "../../constants/sizeCalculator";

export default function FlatButton({
  style,
  theme = "default",
  backgroundColor = "primary",
  paddingVertical = 16,
  borderRadius = 4,
  icon = null,
  fontSize = 16,
  textColor = "#FFFFFF",
  fontFamily = fonts.Heebo_500Medium,
  marginLeft = 8,
  text = "Any button text",
  onPress = () => console.log("Not implemented yet!"),
}) {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: getThemeColor(backgroundColor, theme),
          paddingVertical: _generalSize(paddingVertical),
          borderRadius: _generalSize(borderRadius),
        },
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        allowFontScaling={false}
        style={{ fontSize: _fontSize(fontSize), color: textColor, fontFamily: fontFamily, marginLeft: _generalSize(marginLeft) }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
