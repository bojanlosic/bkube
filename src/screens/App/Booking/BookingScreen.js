import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingView from "./BookingView";
import { bookingController, cameraController } from "../../../redux/actions/app";

const Scan = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const site = route?.params?.site;
  const shelter = route?.params?.shelter;

  const navigateBack = () => {
    navigation.goBack();
  };

  const dispBookShelter = () => {
    dispatch(bookingController(true));
  };

  const openCamera = () => {
    dispatch(cameraController(true));
  };
  return (
    <BookingView
      theme={app.appTheme}
      shelter={shelter}
      site={site}
      navigateBack={navigateBack}
      dispBookShelter={dispBookShelter}
      openCamera={openCamera}
    />
  );
};

export default Scan;
