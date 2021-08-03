import React from "react";
import { TouchableOpacity, View } from "react-native";
import getStyles from "./Styles";
import AppText from "../../../components/texts/AppText";
import ArrowLeft from "../../../../assets/images/svg/arrow-left.svg";
import { _generalSize } from "../../../constants/sizeCalculator";
import getThemeColor from "../../../constants/colors/getThemeColor";
import fonts from "../../../constants/fonts";
import OutlineButton from "../../../components/buttons/OutlineButton";
import Directions from "../../../../assets/images/svg/directions.svg";
import Report from "../../../../assets/images/svg/report.svg";
import BalanceContainer from "../components/BalanceContainer";
import FlatButton from "../../../components/buttons/FlatButton";

export default ({ theme, site, shelter, navigateBack }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={navigateBack}>
          <ArrowLeft width={_generalSize(28)} style={{ color: getThemeColor("text", theme) }} />
        </TouchableOpacity>
      </View>
      <View style={styles.shelterContainer}>
        <AppText theme={theme} text={`Shelter ${shelter?.number}`} fontSize={24} fontFamily={fonts.Heebo_700Bold} color="primary" />
        <AppText theme={theme} text={site?.name} color="navigationTextWhite" style={{ marginTop: _generalSize(8) }} />
        <AppText theme={theme} text={site?.street} fontSize={16} fontFamily={fonts.Heebo_500Medium} style={{ marginTop: _generalSize(8) }} />
        <View style={{ flexDirection: "row", marginTop: _generalSize(16), maxWidth: "60%" }}>
          <OutlineButton
            icon={<Directions width={_generalSize(20)} color={getThemeColor("white", theme)} />}
            style={{ flex: 1, marginHorizontal: _generalSize(4) }}
            paddingVertical={8}
            fontSize={14}
            marginLeft={8}
            text="Directions"
          />
          <OutlineButton
            icon={<Report width={_generalSize(20)} color={getThemeColor("white", theme)} />}
            style={{ flex: 1, marginHorizontal: _generalSize(4) }}
            paddingVertical={8}
            fontSize={14}
            marginLeft={8}
            text="Report"
          />
        </View>
      </View>
      <View>
        <BalanceContainer theme={theme} />
        <View style={{ paddingHorizontal: _generalSize(6) }}>
          <FlatButton text="Scan QR code" />
          <OutlineButton style={{ marginTop: _generalSize(12) }} text="Book shelter" />
        </View>
      </View>
    </View>
  );
};
