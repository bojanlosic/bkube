import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationLink from "./ConfirmationLinkView";

const ConfLink = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
  });



  return (
    <ConfirmationLink
      navigation={navigation}
      theme={app.appTheme}
      
    />
  );
};

export default ConfLink;
