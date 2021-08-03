import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelterView from "./ShelterView";

const Scan = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const site = route.params.site;
  const shelter = route.params.shelter;

  const navigateBack = () => {
    navigation.goBack();
  };
  return <ShelterView theme={app.appTheme} shelter={shelter} site={site} navigateBack={navigateBack} />;
};

export default Scan;
