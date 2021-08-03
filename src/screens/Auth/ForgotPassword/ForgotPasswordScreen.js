import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ForgotPasswordView from "./ForgotPasswordView";

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
  });

  function handleTextInput(value, name) {
    setUserInfo({ ...userInfo, [name]: value });
  }

  const sendForgotPasswordToEmail = () => {
    try {
      // Send request to backend
      // From email navigate to ResetPassword with token for reset
      // At the moment it is skipped
      navigation.navigate("ResetPassword");
      Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <ForgotPasswordView
      handleTextInput={handleTextInput}
      userInfo={userInfo}
      sendForgotPasswordToEmail={sendForgotPasswordToEmail}
      navigation={navigation}
      theme={app.appTheme}
      
    />
  );
};

export default ForgotPassword;
