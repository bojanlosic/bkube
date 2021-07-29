import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../redux/types/actionTypes";
import MoreView from "./MoreView";
import { logoutUser } from "../../../redux/actions/user";
import { setAppTheme, setLanguageAction } from "../../../redux/actions/app";

const More = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  const logout = () => {
    dispatch(logoutUser());
  };

  const setLanguage = (language) => {
    dispatch(setLanguageAction(language));
  };

  const changeTheme = () => {
    dispatch(setAppTheme(app.appTheme === "default" ? "dark" : "default"));
  };

  return <MoreView logout={logout} changeTheme={changeTheme} setLanguage={(lang) => setLanguage(lang)} app={app} />;
};

export default More;
