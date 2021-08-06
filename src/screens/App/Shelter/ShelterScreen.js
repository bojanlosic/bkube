import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookingController, cameraController } from "../../../redux/actions/app";
import ShelterView from "./ShelterView";

const Shelter = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const site = route?.params?.site;
  const shelter = route?.params?.shelter;

  const navigateBack = () => {
    navigation.goBack();
  };

  const openCamera = () => {
    dispatch(cameraController(true));
  };

  const dispPayShelter = () => {
    dispatch(bookingController(false));
  };

  return (
    <ShelterView
      theme={app.appTheme}
      shelter={shelter}
      site={site}
      navigateBack={navigateBack}
      openCamera={openCamera}
      dispPayShelter={dispPayShelter}
    />
  );
};

export default Shelter;
