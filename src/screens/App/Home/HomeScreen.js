import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_API } from "../../../redux/types/actionTypes";
import HomeView from "./HomeView";
import * as Location from "expo-location";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userLocation, setUserLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setUserLocation(userLocation);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (userLocation) {
    text = JSON.stringify(userLocation);
  }

  const locations = [
    { id: "4c9f2111-01c2-46ee-8236-33b7e026e928", coordinate: { latitude: 44.8065105, longitude: 20.4065266 }, free: 3 },
    { id: "8cc496b5-cfa8-40d6-8c3f-f5b2c8e35f25", coordinate: { latitude: 44.8104878, longitude: 20.3965943 }, free: 0 },
    { id: "ce2c7139-b2f5-49db-b92d-260edf877733", coordinate: { latitude: 44.7799055, longitude: 20.4559534 }, free: 5 },
    { id: "4f7e4363-7db9-4739-b014-32dd4178cc68", coordinate: { latitude: 44.8218105, longitude: 20.4059355 }, free: 1 },
    { id: "57211205-cafc-445f-8bf3-d127df25c243", coordinate: { latitude: 44.7796631, longitude: 20.4489836 }, free: 2 },
  ];

  const location = {
    location: "4c9f2111-01c2-46ee-8236-33b7e026e928",
    name: 'Bike station "Aldo"',
    street: "Via degli Aldobrandeschi 26",
    shelters: [
      {
        id: "5eee46b7-bc36-46ed-a7d7-73b445580cc9",
        status: "occupied",
      },
      {
        id: "14cf4a66-1756-4ee5-be96-fda75d67baba",
        status: "free",
      },
      {
        id: "bd7af619-ade4-4502-b68f-78cc6f98a7e2",
        status: "occupied",
      },
      {
        id: "d533f326-7056-4b0b-a0b1-7fba94f08a59",
        status: "occupied",
      },
      {
        id: "ce8f0bb5-ea57-41f7-9df1-b46a3a1bac52",
        status: "reserved",
      },
      {
        id: "5a8f74b1-b4f5-4d06-99f4-8be6f992ec69",
        status: "occupied",
      },
      {
        id: "78d17900-77bc-43d0-98b1-b5fffa1b260b",
        status: "free",
      },
      {
        id: "c32b33e3-c6d9-44f3-b344-05f07fff01e6",
        status: "free",
      },
    ],
  };

  const smaraj = () => {
    dispatch({ type: LOADING_API, payload: true });
    console.log("POCETAK");
    setTimeout(async () => {
      console.log("KRAJ");
      dispatch({ type: LOADING_API, payload: false });
    }, 3000);
  };

  const navigateToShelter = (id) => {
    navigation.navigate("Shelter", { id: id });
  };

  return (
    <HomeView theme={app.appTheme} location={location} locations={locations} userLocation={userLocation} navigateToShelter={navigateToShelter} />
  );
};

export default Home;
