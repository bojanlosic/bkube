import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ScreenName from "./{ScreenName}View";

const Scan = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  return <ScreenName theme={app.appTheme} />;
};

export default Scan;
