import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Keyboard, Dimensions, TouchableWithoutFeedback, View } from "react-native";
import { initialWindowMetrics, SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import SplashScreen from "./SplashScreen";
import { setStatusBarBackgroundColor, setStatusBarStyle, StatusBar, StatusBarStyle } from "expo-status-bar";
import getThemeColor from "../constants/colors/getThemeColor";

const useIsFloatingKeyboard = () => {
  const [isFloating, setFloating] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;
  const onKeyboardWillChangeFrame = (event) => {
    setFloating(event.endCoordinates.width !== windowWidth);
  };

  React.useEffect(() => {
    const keyboard = Keyboard.addListener("keyboardWillChangeFrame", onKeyboardWillChangeFrame);
    return () => {
      keyboard.remove();
    };
  }, []);

  return isFloating;
};

const ScreenWrapper = ({ children }) => {
  const isFloatingKeyboard = useIsFloatingKeyboard();
  const app = useSelector((state) => state.app);

  const backgroundColor = getThemeColor("background", app.appTheme);
  if (Platform.OS === "android") {
    setStatusBarBackgroundColor(backgroundColor, true);
  }
  setStatusBarStyle(app.appTheme === "default" ? "light" : "dark");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: getThemeColor("background", app.appTheme) }]} initialMetrics={initialWindowMetrics}>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled={!isFloatingKeyboard}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1 }}>
            {children}
            {app.isLoadingAPI && <SplashScreen />}
            {/* {Platform.OS === "ios" && <StatusBar style="light" />} */}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default ScreenWrapper;
