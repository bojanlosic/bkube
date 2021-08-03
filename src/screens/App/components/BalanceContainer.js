import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../components/texts/AppText";
import getThemeColor from "../../../constants/colors/getThemeColor";
import ParkingCircle from "../../../../assets/images/svg/parking-circle.svg";
import { Feather } from "@expo/vector-icons";
import { _generalSize } from "../../../constants/sizeCalculator";
import fonts from "../../../constants/fonts";

export default function BalanceContainer({ theme = "default" }) {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.currentBalanceContainer}>
        <AppText theme={theme} text="Current balance" fontSize={16} />
        <View style={styles.balancePointsContainer}>
          <AppText theme={theme} text="46" color="primaryPressed" fontSize={20} fontFamily={fonts.Heebo_500Medium} />
          <ParkingCircle width={_generalSize(14)} style={{ color: getThemeColor("primaryPressed", theme) }} />
        </View>
      </View>
      <View style={styles.addMoreTokensContainer}>
        <Feather name="plus" size={_generalSize(24)} color={getThemeColor("primaryPressed", theme)} />
        <AppText
          style={{ textDecorationLine: "underline", marginLeft: _generalSize(8) }}
          theme={theme}
          text="Add more tokens"
          color="primaryPressed"
          fontSize={16}
        />
      </View>
    </View>
  );
}

const getStyles = (theme) => {
  return StyleSheet.create({
    balanceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: _generalSize(6),
      paddingBottom: _generalSize(16),
    },
    currentBalanceContainer: { flexDirection: "row", alignItems: "center" },
    balancePointsContainer: { flexDirection: "row", alignItems: "center", marginLeft: _generalSize(8) },
    addMoreTokensContainer: { flexDirection: "row", alignItems: "center" },
  });
};
