import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageSetItem } from "../../../core/storage";
import { loginUserAction } from "../../../redux/actions/user";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { setLoadingApiAction } from "../../../redux/actions/app";
import { DEBUG_MODE } from "@env";
import EnterNewPasswordView from "./EnterNewPasswordView";

WebBrowser.maybeCompleteAuthSession();

const EnterNewPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const initialErrors = {
    
    password: "",
    repeatPassword: ""
    
  };
  const [errors, setErrors] = React.useState(initialErrors);
  const initialHidePassword = {
    password: true,
    repeatPassword: true,
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
    console.log(hidePassword);
  };

  const checkPasswords = () => {
    if (userInfo.password === userInfo.repeatPassword) {
      console.log("Succses");
      navigation.navigate("SuccesfullyChange");
    } else {
      console.log("Error");
      // setErrors({password : 'DjokaDjoka' , repeatPassword : 'DjokaDoGrla'})
      // setErrorMessage('password', 'DjokaDjoka')
      setErrorMessage('repeatPassword', 'Passwords do not match')
      console.log(errors)
    }
  };

  return (
    <EnterNewPasswordView
      userInfo={userInfo}
      handleTextInput={handleTextInput}
      navigation={navigation}
      errors={errors}
      theme={app.appTheme}
      hidePassword={hidePassword}
      handleHidePassword={handleHidePassword}
      checkPasswords={checkPasswords}
    />
  );
};

export default EnterNewPassword;
