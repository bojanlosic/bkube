import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageSetItem } from "../../../core/storage";
import { loginUserAction } from "../../../redux/actions/user";
import VerifyAccountView from "./VerifyAccountView";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";

const VerifyAccount = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (e.data.action.type == "NAVIGATE") {
          return;
        }
        e.preventDefault();
      }),
    [navigation]
  );

  React.useEffect(() => {
    if (route?.params?.hash) {
      // verifyAccount(route.params.hash);
    }
  }, [route?.params?.hash]);

  const verifyAccount = (hash) => {
    try {
      // Send verification to backend and get token
      console.log(hash);
      setTimeout(async () => {
        await storageSetItem("token", "X");
        dispatch(loginUserAction({ data: { token: "X", user: "Y" } }));
      }, 1000);
      Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const continueToLogin = () => {
    navigation.navigate("Login");
  };

  return <VerifyAccountView theme={app.appTheme} haveHash={route?.params?.hash} continueToLogin={continueToLogin} />;
};

export default VerifyAccount;
