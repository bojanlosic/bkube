import React from "react";
import { Button, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { mainStyle as style } from "@styles";
import getStyles from "./Styles";
import GoogleLogo from "../../../../assets/svg/google-logo.svg";
import { HelperText, TextInput } from "react-native-paper";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _fontSize, _generalSize, _imageSize } from "../../../constants/sizeCalculator";
import { Feather, AntDesign } from "@expo/vector-icons";
import LogoHeader from "../components/LogoHeader";
import FlatInput from "../../../components/Inputs/FlatInput";
import OutlineButton from "../../../components/buttons/OutlineButton";
import FlatButton from "../../../components/buttons/FlatButton";
import AppText from "../../../components/texts/AppText";
import fonts from "../../../constants/fonts";
import ContinueWithSocial from "../components/ContinueWithSocial";

export default ({ userInfo, handleTextInput, registerUser, navigation, request, promptAsync, errors, theme, hidePassword, handleHidePassword }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <ScrollView style={[styles.scrollviewContainer, { backgroundColor: getThemeColor("background", theme) }]}>
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <LogoHeader theme={theme} />
        <FlatInput
          theme={theme}
          label="Email*"
          handleTextInput={(text) => handleTextInput(text, "email")}
          value={userInfo.email}
          error={errors.email}
        />
        <FlatInput
          theme={theme}
          label="Password*"
          handleTextInput={(text) => handleTextInput(text, "password")}
          value={userInfo.password}
          error={errors.password}
          secureTextEntry={hidePassword.password}
          iconName={() => (
            <Feather name={hidePassword.password ? "eye" : "eye-off"} size={_generalSize(20)} color={getThemeColor("textInputPlaceholder", theme)} />
          )}
          iconClick={() => handleHidePassword("password")}
        />
        <FlatInput
          theme={theme}
          label="Confirm password*"
          handleTextInput={(text) => handleTextInput(text, "passwordConfirm")}
          value={userInfo.passwordConfirm}
          error={errors.passwordConfirm}
          secureTextEntry={hidePassword.passwordConfirm}
          iconName={() => (
            <Feather
              name={hidePassword.passwordConfirm ? "eye" : "eye-off"}
              size={_generalSize(20)}
              color={getThemeColor("textInputPlaceholder", theme)}
            />
          )}
          iconClick={() => handleHidePassword("passwordConfirm")}
        />
        <FlatButton theme={theme} onPress={registerUser} text="Sign up" />
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: _generalSize(12) }}>
          <AppText theme={theme} color="text" text="Already have an account?" />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <AppText theme={theme} color="text" text="Log in" color="primary" fontFamily={fonts.Heebo_500Medium} marginLeft={4} />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: _generalSize(20), alignItems: "center" }}>
          <AppText theme={theme} text="Or" color="text" />
        </View>
        <ContinueWithSocial theme={theme} />
      </View>
    </ScrollView>
  );
};
