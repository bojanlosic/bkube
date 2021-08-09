import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationLink from "./ConfirmationLinkView";

const ConfLink = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
  });

  const navigateBack = () => {
    navigation.goBack();
  };



  return (
    <ConfirmationLink
      navigation={navigation}
      theme={app.appTheme}
      navigateBack={navigateBack}
      
    />
  );
};

export default ConfLink;
