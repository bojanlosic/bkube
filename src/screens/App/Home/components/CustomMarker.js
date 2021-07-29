import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../../components/texts/AppText";
import getThemeColor from "../../../../constants/colors/getThemeColor";

export default function CustomMarker({ theme = "default", text = 0 }) {
  const styles = React.useMemo(() => getStyles(theme, text), [theme, text]);
  return (
    <View style={styles.biggerCircle}>
      <View style={styles.smallerCircle}>
        <AppText text={text} theme={theme} color={text ? "text" : "dirtyWhiteText"} />
      </View>
    </View>
  );
}

const getStyles = (theme, text) => {
  return StyleSheet.create({
    biggerCircle: {
      width: 40,
      height: 40,
      borderRadius: 50,
      padding: 4,
      backgroundColor: getThemeColor(text ? "primaryBackground" : "allOccupiedSheltersBackground", theme),
      borderWidth: 1,
      borderColor: getThemeColor(text ? "primary" : "allOccupiedShelters", theme),
    },
    smallerCircle: {
      flex: 1,
      borderRadius: 50,
      width: "100%",
      backgroundColor: getThemeColor(text ? "primary" : "allOccupiedShelters", theme),
      alignItems: "center",
      justifyContent: "center",
    },
  });
};
