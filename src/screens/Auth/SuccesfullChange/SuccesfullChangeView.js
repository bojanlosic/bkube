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
import Check from "../../../../assets/svg/check.svg";
export default ({ navigation, theme }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, }}>
        <View style={styles.envelopeView}>
          <Check style={styles.aligner}/>

          <AppText
            theme={theme}
            text="Password has been successfuly changed"
            fontSize={16}
            fontFamily={fonts.Heebo_500Medium}
            style={styles.aligner}
          />
          <AppText
            theme={theme}
            text="Continue to login screen"
            fontSize={16}
            fontFamily={fonts.Heebo_400Regular}
            color={"textInputPlaceholder"}
            style={styles.aligner}
          />
        </View>
      </View>
      <View style={{flex:1, }}></View>
      <FlatButton theme={theme} onPress={() => navigation.navigate('Login')} text="Continue" style={styles.buttonSpace} />
    </View>
  );
};
