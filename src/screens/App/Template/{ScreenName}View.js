import React from "react";
import { View } from "react-native";
import getStyles from "./Styles";
import AppText from "../../../components/texts/AppText";

export default ({ theme }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <AppText theme={theme} text="Scan screen" />
    </View>
  );
};
