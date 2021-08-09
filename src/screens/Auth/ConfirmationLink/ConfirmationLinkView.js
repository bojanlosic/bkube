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
import ArrowLeft from "../../../../assets/svg/arrow-left.svg";
import { defaultColors } from "../../../constants/colors/Colors";
import Envelope from "../../../../assets/svg/envelope.svg";
export default ({ navigation, theme, navigateBack }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerView}>
        <TouchableOpacity onPress={navigateBack}>
          <ArrowLeft
            width={_generalSize(28)}
            style={{ color: getThemeColor("text", theme) }}
          />
        </TouchableOpacity>

          <AppText
            theme={theme}
            text="Forgot Password"
            fontSize={16}
            fontFamily={fonts.Heebo_400Regular}
            style={styles.headerText}
          />
          <ArrowLeft width={_generalSize(28)} />
        </View>
        <View style={styles.envelopeView}>
          <Envelope style={styles.envelopeImage} />

          <AppText
            theme={theme}
            text="Instructions have been sent to you"
            fontSize={16}
            fontFamily={fonts.Heebo_500Medium}
            style={styles.aligner}
          />
          <AppText
            theme={theme}
            text="Check your email to continue"
            fontSize={16}
            fontFamily={fonts.Heebo_400Regular}
            color={"textInputPlaceholder"}
            style={styles.aligner}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
      <Text
        style={{ color: "#FFF" }}
        onPress={() => navigation.navigate("EnterNewPassword")}
      >
        Next page
      </Text>
    </View>
  );
};
