import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ScanView from "./ScanView";

const Scan = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  return <ScanView theme={app.appTheme} />;
};

export default Scan;
