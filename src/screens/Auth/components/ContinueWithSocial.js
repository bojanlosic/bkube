import React from "react";
import { View } from "react-native";
import OutlineButton from "../../../components/buttons/OutlineButton";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";
import GoogleLogo from "../../../../assets/images/svg/google-logo.svg";
import { AntDesign } from "@expo/vector-icons";

export default function ContinueWithSocial({ theme, request, promptAsync }) {
  return (
    <View>
      <OutlineButton
        theme={theme}
        onPress={promptAsync}
        text="Continue with Apple"
        icon={<AntDesign name="apple1" size={_generalSize(20)} color={getThemeColor("text", theme)} />}
      />
      <OutlineButton
        theme={theme}
        style={{ marginTop: _generalSize(16) }}
        text="Continue with Google"
        disabled={!request}
        onPress={promptAsync}
        icon={<GoogleLogo width={_generalSize(20)} />}
      />
    </View>
  );
}
