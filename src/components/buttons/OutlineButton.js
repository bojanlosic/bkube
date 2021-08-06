import React from "react";
import { Text, TouchableOpacity } from "react-native";
import getThemeColor from "../../constants/colors/getThemeColor";
import fonts from "../../constants/fonts";
import { _fontSize, _generalSize } from "../../constants/sizeCalculator";

export default function OutlineButton({
  style,
  theme = "default",
  backgroundColor = "transparent",
  paddingVertical = 20,
  borderRadius = 4,
  borderColor = "text",
  borderWidth = 1,
  icon = null,
  fontSize = 16,
  textColor = "text",
  fontFamily = fonts.Heebo_500Medium,
  marginLeft = 0,
  text = "Any button text",
  onPress = () => console.log("Not implemented yet!"),
  disabled = false,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        style,
        {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: getThemeColor(backgroundColor, theme),
          paddingVertical: _generalSize(paddingVertical),
          borderRadius: _generalSize(borderRadius),
          borderColor: getThemeColor(borderColor, theme),
          borderWidth: _generalSize(borderWidth),
        },
      ]}
      onPress={onPress}
    >
      {icon}
      <Text
        allowFontScaling={false}
        style={{
          fontSize: _fontSize(fontSize),
          color: getThemeColor(textColor, theme),
          fontFamily: fontFamily,
          marginLeft: _generalSize(marginLeft),
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
