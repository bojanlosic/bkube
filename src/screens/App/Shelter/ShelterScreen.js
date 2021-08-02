import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelterView from "./ShelterView";

const Scan = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const id = route.params.id;

  const navigateBack = () => {
    navigation.goBack();
  };
  return <ShelterView theme={app.appTheme} id={id} navigateBack={navigateBack} />;
};

export default Scan;
