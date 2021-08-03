import React from "react";
import { Button, Text, TextInput, View } from "react-native";
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
import Envelope from "../../../../assets/images/svg/envelope.svg";
export default ({ navigation, theme }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.headerView}>
          <AntDesign
            name="arrowleft"
            size={_generalSize(24)}
            color={getThemeColor("text", theme)}
            style={styles.headerArrow}
            onPress={() => navigation.navigate("Login")}
          />

          <AppText
            theme={theme}
            text="Forgot Password"
            fontSize={16}
            fontFamily={fonts.Heebo_400Regular}
            style={styles.headerText}
          />
          <View />
        </View>
        <View style={styles.envelopeView}>
          <Envelope style={styles.aligner}/>

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
      <Text style={{color:'#FFF'}} onPress={() => navigation.navigate('EnterNewPassword')}>Next page</Text>
    </View>
  );
};
