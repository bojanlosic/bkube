import React from "react";
import { Button, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { mainStyle as style } from "@styles";
import getStyles from "./Styles";
import GoogleLogo from "../../../../assets/images/svg/google-logo.svg";
import { HelperText, TextInput } from "react-native-paper";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _fontSize, _generalSize, _imageSize } from "../../../constants/sizeCalculator";
import { Feather, AntDesign } from "@expo/vector-icons";
import LogoHeader from "../components/LogoHeader";
import FlatInput from "../../../components/Inputs/FlatInput";
import OutlineButton from "../../../components/buttons/OutlineButton";
import FlatButton from "../../../components/buttons/FlatButton";
import fonts from "../../../constants/fonts";
import AppText from "../../../components/texts/AppText";
import ContinueWithSocial from "../components/ContinueWithSocial";

export default ({ userInfo, handleTextInput, login, navigation, request, promptAsync, errors, theme, hidePassword, handleHidePassword }) => {
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
        <TouchableOpacity
          style={{ marginBottom: _generalSize(36), marginTop: _generalSize(8) }}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <AppText theme={theme} text="Forgot password?" color="primary" />
        </TouchableOpacity>
        <FlatButton theme={theme} onPress={login} text="Log in" />
        <View style={styles.dontHaveAccContainer}>
          <AppText theme={theme} text="Don’t have an account?" />
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <AppText theme={theme} text="Sign up" color="primary" fontFamily={fonts.Heebo_500Medium} marginLeft={4} />
          </TouchableOpacity>
        </View>
        <View style={styles.orContainer}>
          <AppText theme={theme} text="Or" />
        </View>
        <ContinueWithSocial theme={theme} />
      </View>
    </ScrollView>
  );
};
