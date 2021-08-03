import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SuccesFullView from "./SuccesfullChangeView";

const SuccesFull = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userInfo, setUserInfo] = React.useState({
    email: "",
  });



  return (
    <SuccesFullView
      navigation={navigation}
      theme={app.appTheme}
      
    />
  );
};

export default SuccesFull;
