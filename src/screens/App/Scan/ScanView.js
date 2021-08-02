import React from "react";
import { View } from "react-native";
import AppText from "../../../components/texts/AppText";
import getStyles from "./Styles";
import BottomSheet from "@gorhom/bottom-sheet";
import getThemeColor from "../../../constants/colors/getThemeColor";
import { _generalSize } from "../../../constants/sizeCalculator";
import { Portal, PortalHost } from "@gorhom/portal";
import FlatButton from "../../../components/buttons/FlatButton";
import FlatInput from "../../../components/Inputs/FlatInput";

export default ({ theme }) => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
  });
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const bottomSheetRef = React.useRef(null);

  // variables
  const snapPoints = React.useMemo(() => ["0%", "50%", "75%"], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  function handleTextInput(value, name) {
    setUserInfo({ ...userInfo, [name]: value });
  }

  return (
    <View style={styles.container}>
      <AppText theme={theme} text="Scan screen" />
      <FlatButton
        onPress={() => {
          bottomSheetRef.current.expand();
        }}
      />
    </View>
  );
};
