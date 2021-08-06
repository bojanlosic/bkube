import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cameraController } from "../../../redux/actions/app";
import ScanView from "./ScanView";

const Scan = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  React.useEffect(() => {
    dispatch(cameraController(true));
  }, []);

  return <ScanView theme={app.appTheme} />;
};

export default Scan;
