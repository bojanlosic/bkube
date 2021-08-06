import React from "react";
import { Text } from "react-native";
import getThemeColor from "../../constants/colors/getThemeColor";
import fonts from "../../constants/fonts";
import { _fontSize, _generalSize } from "../../constants/sizeCalculator";

export default function AppText({
  text = "",
  style = {},
  color = "text",
  theme = "default",
  fontFamily = fonts.Heebo_400Regular,
  fontSize = 14,
  marginLeft = 0,
  children,
}) {
  return (
    <Text
      allowFontScaling={false}
      style={[
        style,
        {
          fontFamily: fontFamily,
          color: getThemeColor(color, theme),
          fontSize: _fontSize(fontSize),
          marginLeft: _generalSize(marginLeft),
        },
      ]}
    >
      {text}
      {children}
    </Text>
  );
}
