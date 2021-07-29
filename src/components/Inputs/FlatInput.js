import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import getThemeColor from "../../constants/colors/getThemeColor";
import fonts from "../../constants/fonts";
import { _fontSize } from "../../constants/sizeCalculator";

export default function FlatInput({
  handleTextInput,
  inputField,
  value,
  error,
  label = "Placeholder",
  theme = "default",
  primaryColor = "primary",
  placeholderColor = "textInputPlaceholder",
  textColor = "text",
  underlineColor = "textInputPlaceholder",
  errorColor = "errorMessage",
  backgroundColor = "transparent",
  fontFamily = fonts.Heebo_400Regular,
  fontSize = _fontSize(16),
  errorFontSize = _fontSize(14),
  iconName = null,
  iconClick = () => console.log("Not implemented yet"),
  secureTextEntry = false,
}) {
  return (
    <>
      <TextInput
        allowFontScaling={false}
        label={label}
        value={value}
        onChangeText={(text) => handleTextInput(text, inputField)}
        style={{ backgroundColor: backgroundColor, fontSize: fontSize, fontFamily: fontFamily }}
        dense={true}
        error={error}
        theme={{
          colors: {
            text: getThemeColor(textColor, theme),
            primary: getThemeColor(primaryColor, theme),
            placeholder: getThemeColor(placeholderColor, theme),
            error: getThemeColor(errorColor, theme),
            disabled: getThemeColor(underlineColor, theme),
          },
        }}
        secureTextEntry={secureTextEntry}
        right={iconName ? <TextInput.Icon name={iconName} onPress={iconClick} /> : null}
      />
      <HelperText style={{ fontSize: errorFontSize }} type="error" visible={error}>
        {error}
      </HelperText>
    </>
  );
}
