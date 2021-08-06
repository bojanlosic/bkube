import React from "react";
import { View, Text } from "react-native";
import Logo from "../../../../assets/svg/logo.svg";
import AppText from "../../../components/texts/AppText";
import getThemeColor from "../../../constants/colors/getThemeColor";
import fonts from "../../../constants/fonts";
import { _fontSize, _generalSize, _imageSize } from "../../../constants/sizeCalculator";

export default ({ theme }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: _generalSize(32),
        marginBottom: _generalSize(28),
      }}
    >
      <Logo style={{ color: getThemeColor("svgImage", theme) }} width={_imageSize(131)} />
      <AppText theme={theme} style={{ marginTop: _generalSize(28) }} text="Welcome to Bkube" fontSize={20} />
      <AppText theme={theme} text="Keep your bike safe and secure" color="textInputPlaceholder" fontSize={16} />
    </View>
  );
};
