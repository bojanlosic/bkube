import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_API } from "../../../redux/types/actionTypes";
import HomeView from "./HomeView";
import * as Location from "expo-location";

const Home = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const shelters = [
    { id: "4c9f2111-01c2-46ee-8236-33b7e026e928", coordinate: { latitude: 44.8065105, longitude: 20.4065266 }, free: 3 },
    { id: "8cc496b5-cfa8-40d6-8c3f-f5b2c8e35f25", coordinate: { latitude: 44.8104878, longitude: 20.3965943 }, free: 0 },
    { id: "ce2c7139-b2f5-49db-b92d-260edf877733", coordinate: { latitude: 44.7799055, longitude: 20.4559534 }, free: 5 },
    { id: "4f7e4363-7db9-4739-b014-32dd4178cc68", coordinate: { latitude: 44.8218105, longitude: 20.4059355 }, free: 1 },
    { id: "57211205-cafc-445f-8bf3-d127df25c243", coordinate: { latitude: 44.7796631, longitude: 20.4489836 }, free: 2 },
  ];

  const smaraj = () => {
    dispatch({ type: LOADING_API, payload: true });
    console.log("POCETAK");
    setTimeout(async () => {
      console.log("KRAJ");
      dispatch({ type: LOADING_API, payload: false });
    }, 3000);
  };

  return <HomeView theme={app.appTheme} shelters={shelters} />;
};

export default Home;
