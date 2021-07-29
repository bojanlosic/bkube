import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction, registerUserAction } from "../../../redux/actions/user";
import { REGISTER } from "../../../redux/types/actionTypes";
import { REGEX_EMAIL_MAP } from "./regexEmailMap";
import { REGEX_PASSWORD_MAP } from "./regexPasswordMap";
import RegisterView from "./RegisterView";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { setLoadingApiAction } from "../../../redux/actions/app";
import { storageSetItem } from "../../../core/storage";
import { DEBUG_MODE } from "@env";

WebBrowser.maybeCompleteAuthSession();
// EDIT CONFIG FOR REGISTRATION
const EMAIL_VALIDATION = REGEX_EMAIL_MAP.BASIC;
const PASSWORD_MIN_LENGTH = 3;
const PASSWORD_CHARACTERS_VALIDATION = REGEX_PASSWORD_MAP.NONE;

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const initialErrors = {
    email: "",
    password: "",
    login: "",
  };
  const [errors, setErrors] = React.useState(initialErrors);
  const initialHidePassword = {
    password: true,
    passwordConfirm: true,
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

  const validateFields = () => {
    let errors = {
      email: "",
      password: "",
      login: "",
    };
    if (!DEBUG_MODE) {
      if (!userInfo.email) {
        errors.email = `Email is required`;
        setErrors(errors);
        return false;
      }
      if (EMAIL_VALIDATION && !EMAIL_VALIDATION.test(userInfo.email.toLowerCase())) {
        errors.email = `Not a valid email address.`;
        setErrors(errors);
        return false;
      }
      if (!userInfo.password) {
        errors.password = `Password is required`;
        setErrors(errors);
        return false;
      }
      if (userInfo.password.length < PASSWORD_MIN_LENGTH) {
        errors.password = `Password must have more than ${PASSWORD_MIN_LENGTH} characters.`;
        setErrors(errors);
        return false;
      }
      if (PASSWORD_CHARACTERS_VALIDATION && !PASSWORD_CHARACTERS_VALIDATION.test(userInfo.password)) {
        errors.password = `Password must have SOMETHING for validation.`;
        setErrors(errors);
        return false;
      }
      if (userInfo.password !== userInfo.passwordConfirm) {
        errors.password = "Passwords does not match";
        setErrors(errors);
        return false;
      }
    }
    return true;
  };

  const registerUser = async () => {
    if (!validateFields()) {
      return;
    }
    const credentils = {
      email: userInfo.email,
      password: userInfo.password,
      passwordConfirm: userInfo.passwordConfirm,
    };
    try {
      await dispatch(registerUserAction(credentils));
      // alert("Account successfully created");
      navigation.navigate("VerifyAccount");
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
    // console.log(response?.type);
    if (response?.type === "success") {
      const { authentication } = response;
      // Dispatch action to get token from backend
      getUserInfo(authentication.accessToken);
    }
  }, [response]);

  return (
    <RegisterView
      userInfo={userInfo}
      handleTextInput={handleTextInput}
      registerUser={registerUser}
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

export default Register;
