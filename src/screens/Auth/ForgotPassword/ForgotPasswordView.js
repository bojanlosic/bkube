import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import getStyles from "./Styles";
import FlatInput from "../../../components/Inputs/FlatInput";
import AppText from "../../../components/texts/AppText";
import fonts from "../../../constants/fonts";
import OutlineButton from "../../../components/buttons/OutlineButton";
import FlatButton from "../../../components/buttons/FlatButton";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";
import { AntDesign } from "@expo/vector-icons";
import { defaultColors } from "../../../constants/colors/Colors";
import ArrowLeft from "../../../../assets/svg/arrow-left.svg";
export default ({ userInfo, sendForgotPasswordToEmail, navigateBack, navigation, theme, handleTextInput }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={navigateBack}>
          <ArrowLeft width={_generalSize(28)} style={{ color: getThemeColor("text", theme) }} />
        </TouchableOpacity>
        <AppText theme={theme} text="Forgot Password" fontSize={16} style={styles.headerText} />
        <ArrowLeft width={_generalSize(28)} />
      </View>
      <View style={{ flex: 1, }}>
        <View style={styles.instructionsViewWrapper}>
          <View style={styles.instructionsView}>
            <AppText theme={theme} text="Please fill in fields to continue" fontSize={20} />
            <AppText theme={theme} text="Mail with furhter instructions will be sent to you" fontSize={16} color={"textInputPlaceholder"} />
          </View>
          <View style={styles.inputView}>
            <FlatInput
              theme={theme}
              handleTextInput={(text) => handleTextInput(text, "email")}
              inputField={"email"}
              value={userInfo.email}
              label={"Email*"}
            />
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.buttonView}>
          <FlatButton theme={theme} text="Submit" onPress={() => navigation.navigate("ConfirmationLink")} />
        </View>
      </View>
    </View>
  );
};