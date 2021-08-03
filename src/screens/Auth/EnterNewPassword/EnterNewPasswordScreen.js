import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageSetItem } from "../../../core/storage";
import { loginUserAction } from "../../../redux/actions/user";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { setLoadingApiAction } from "../../../redux/actions/app";
import { DEBUG_MODE } from "@env";
import EnterNewPasswordView from './EnterNewPasswordView';

WebBrowser.maybeCompleteAuthSession();

const EnterNewPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
    passwordAgain: "",
  });
  const initialErrors = {
    email: "",
    password: "",
    login: "",
  };
  const [errors, setErrors] = React.useState(initialErrors);
  const initialHidePassword = {
    password: true,
  };
  const [hidePassword, setHidePassword] = React.useState(initialHidePassword);

  function handleTextInput(value, name) {
    setUserInfo({ ...userInfo, [name]: value });
  }

  const setErrorMessage = (field, message) => {
    setErrors({ ...errors, [field]: message });
  };

  const handleHidePassword = (field) => {
    setHidePassword({ ...hidePassword, [field]: !hidePassword[field] });
  };

  const login = async () => {
    if (!DEBUG_MODE) {
      if (!userInfo.email) {
        setErrorMessage("email", "Email is required!");
        return;
      } else {
        setErrorMessage("email", "");
      }
      if (!userInfo.password) {
        setErrorMessage("password", "Password is required!");
        return;
      } else {
        setErrorMessage("password", "");
      }
    }
    const credentils = {
      email: userInfo.email,
      password: userInfo.password,
    };
    try {
      dispatch(loginUserAction(credentils));
    } catch (error) {
      console.log("register page", error);
      alert(error);
    }
  };

  // Logic for Google login ---- https://docs.expo.io/guides/authentication/#google
  const [request, response, promptAsync] = useAuthRequest({
    expoClientId: "920195073948-p35ddutdasugm10gifndfipr26jth4qb.apps.googleusercontent.com",
    androidClientId: "920195073948-kj2mt9mjra5jn3f38slu17at8ug0k73g.apps.googleusercontent.com",
  });

  const getUserInfo = async (token) => {
    dispatch(setLoadingApiAction(true));
    await fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        console.log(json);
        dispatch(loginUserAction({ data: { token, user: json } }));
        dispatch(setLoadingApiAction(false));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      // Dispatch action to get token from backend
      getUserInfo(authentication.accessToken);
    }
  }, [response]);

  return (
    <EnterNewPasswordView
      userInfo={userInfo}
      handleTextInput={handleTextInput}
      login={login}
      navigation={navigation}
      request={request}
      promptAsync={() => promptAsync()}
      errors={errors}
      theme={app.appTheme}
      hidePassword={hidePassword}
      handleHidePassword={handleHidePassword}
    />
  );
};

export default EnterNewPassword;
