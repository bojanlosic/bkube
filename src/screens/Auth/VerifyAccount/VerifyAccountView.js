import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { mainStyle as style } from "@styles";
import SplashScreen from "../../../components/SplashScreen";
import getStyles from "./Styles";
import Envelope from "../../../../assets/images/svg/envelope.svg";
import EnvelopeCheck from "../../../../assets/images/svg/envelope-check.svg";
import { _generalSize } from "../../../constants/sizeCalculator";
import AppText from "../../../components/texts/AppText";
import fonts from "../../../constants/fonts";
import FlatButton from "../../../components/buttons/FlatButton";

export default ({ theme, haveHash, continueToLogin }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      {haveHash ? (
        <View style={styles.mailContainer}>
          <EnvelopeCheck width={_generalSize(100)} />
          <AppText style={[styles.textStyle]} text="You have confirmed your email" fontFamily={fonts.Heebo_500Medium} fontSize={16} />
          <AppText
            style={[styles.textStyle, { marginTop: _generalSize(4) }]}
            text="Please continue to log in page to access you account"
            fontSize={16}
            color="dirtyWhiteText"
          />
        </View>
      ) : (
        <View style={styles.mailContainer}>
          <Envelope width={_generalSize(100)} />
          <AppText style={[styles.textStyle]} text="Confirmation link has been sent to your email" fontFamily={fonts.Heebo_500Medium} fontSize={16} />
          <AppText
            style={[styles.textStyle, { marginTop: _generalSize(4) }]}
            text="Check your email to continue"
            fontSize={16}
            color="dirtyWhiteText"
          />
        </View>
      )}
      <View style={styles.buttonContainer}>{haveHash && <FlatButton onPress={continueToLogin} style={{ flex: 1 }} text="Continue" />}</View>
    </View>
  );
};
