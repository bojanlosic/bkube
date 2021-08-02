import React from "react";
import { TouchableOpacity, View } from "react-native";
import getStyles from "./Styles";
import AppText from "../../../components/texts/AppText";
import ArrowLeft from "../../../../assets/images/svg/arrow-left.svg";
import { _generalSize } from "../../../constants/sizeCalculator";
import getThemeColor from "../../../constants/colors/getThemeColor";

export default ({ theme, id, navigateBack }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={navigateBack}>
          <ArrowLeft width={_generalSize(28)} style={{ color: getThemeColor("text", theme) }} />
        </TouchableOpacity>
      </View>
      <AppText theme={theme} text="Shelter screen" />
      <AppText theme={theme} text={id} />
    </View>
  );
};
