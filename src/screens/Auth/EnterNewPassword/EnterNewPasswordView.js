import React from "react";
import {
  Button,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { mainStyle as style } from "@styles";
import getStyles from "./Styles";
import GoogleLogo from "../../../../assets/svg/google-logo.svg";
import { HelperText, TextInput } from "react-native-paper";
import getThemeColor from "../../../constants/colors/getThemeColor";
import {
  _fontSize,
  _generalSize,
  _imageSize,
} from "../../../constants/sizeCalculator";
import { Feather, AntDesign } from "@expo/vector-icons";
import LogoHeader from "../components/LogoHeader";
import FlatInput from "../../../components/Inputs/FlatInput";
import OutlineButton from "../../../components/buttons/OutlineButton";
import FlatButton from "../../../components/buttons/FlatButton";
import fonts from "../../../constants/fonts";
import AppText from "../../../components/texts/AppText";
import ContinueWithSocial from "../components/ContinueWithSocial";

export default ({
  userInfo,
  handleTextInput,
  login,
  navigation,
  request,
  promptAsync,
  errors,
  theme,
  hidePassword,
  handleHidePassword,
}) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent:'space-around' }}>
        <View style={styles.instructionsView}>
          <AppText
            theme={theme}
            text="Enter your new password"
            fontSize={20}
            fontFamily={fonts.Heebo_400Regular}
          />
          <AppText
            theme={theme}
            text="Enter your new password to continue"
            fontSize={16}
            fontFamily={fonts.Heebo_400Regular}
            color={"textInputPlaceholder"}
          />
        </View>

        <View style={styles.inputs}>
          <FlatInput
            theme={theme}
            label="New password"
            handleTextInput={(text) => handleTextInput(text, "password")}
            value={userInfo.password}
            error={errors.password}
            secureTextEntry={hidePassword.password}
            iconName={() => (
              <Feather
                name={hidePassword.password ? "eye" : "eye-off"}
                size={_generalSize(20)}
                color={getThemeColor("textInputPlaceholder", theme)}
              />
            )}
            iconClick={() => handleHidePassword("password")}
          />
          <FlatInput
            theme={theme}
            label="Repeat new password"
            handleTextInput={(text) => handleTextInput(text, "passwordAgain")}
            value={userInfo.passwordAgain}
            error={errors.password}
            secureTextEntry={hidePassword.password}
            iconName={() => (
              <Feather
                name={hidePassword.password ? "eye" : "eye-off"}
                size={_generalSize(20)}
                color={getThemeColor("textInputPlaceholder", theme)}
              />
            )}
            iconClick={() => handleHidePassword("passwordAgain")}
          />
        </View>
        <View />
      </View>
      <View style={{ flex: 1 }}>
      <FlatButton theme={theme} onPress={() => navigation.navigate('SuccesfullyChange')} text="Submit" style={styles.buttonSpace} />
      <OutlineButton theme={theme} onPress={() => navigation.navigate('Login')} text="Cancel" />
      </View>
    </View>
  );
};
