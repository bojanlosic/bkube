import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_API } from "../../../redux/types/actionTypes";
import HomeView from "./HomeView";
import * as Location from "expo-location";
import { View } from "react-native";
import AppText from "../../../components/texts/AppText";
import FlatButton from "../../../components/buttons/FlatButton";
import getThemeColor from "../../../constants/colors/getThemeColor";

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const locations = [
  { id: "4c9f2111-01c2-46ee-8236-33b7e026e928", coordinate: { latitude: 44.8065105, longitude: 20.4065266 }, free: 3 },
  { id: "8cc496b5-cfa8-40d6-8c3f-f5b2c8e35f25", coordinate: { latitude: 44.8104878, longitude: 20.3965943 }, free: 0 },
  { id: "ce2c7139-b2f5-49db-b92d-260edf877733", coordinate: { latitude: 44.7799055, longitude: 20.4559534 }, free: 5 },
  { id: "4f7e4363-7db9-4739-b014-32dd4178cc68", coordinate: { latitude: 44.8218105, longitude: 20.4059355 }, free: 1 },
  { id: "57211205-cafc-445f-8bf3-d127df25c243", coordinate: { latitude: 44.7796631, longitude: 20.4489836 }, free: 2 },
];

const site = {
  id: "4c9f2111-01c2-46ee-8236-33b7e026e928",
  name: 'Bike station "Aldo"',
  street: "Via degli Aldobrandeschi 26",
  shelters: [
    {
      id: "5eee46b7-bc36-46ed-a7d7-73b445580cc9",
      number: 1,
      status: "occupied",
    },
    {
      id: "14cf4a66-1756-4ee5-be96-fda75d67baba",
      number: 2,
      status: "free",
    },
    {
      id: "bd7af619-ade4-4502-b68f-78cc6f98a7e2",
      number: 3,
      status: "occupied",
    },
    {
      id: "d533f326-7056-4b0b-a0b1-7fba94f08a59",
      number: 4,
      status: "occupied",
    },
    {
      id: "ce8f0bb5-ea57-41f7-9df1-b46a3a1bac52",
      number: 5,
      status: "reserved",
    },
    {
      id: "5a8f74b1-b4f5-4d06-99f4-8be6f992ec69",
      number: 6,
      status: "occupied",
    },
    {
      id: "78d17900-77bc-43d0-98b1-b5fffa1b260b",
      number: 7,
      status: "free",
    },
    {
      id: "c32b33e3-c6d9-44f3-b344-05f07fff01e6",
      number: 8,
      status: "free",
    },
    {
      id: "c32b33e3-c6d9-44f3-b344-05f07fff01e7",
      number: 9,
      status: "occupied",
    },
    {
      id: "c32b33e3-c6d9-44f3-b344-05f07fff01e8",
      number: 10,
      status: "occupied",
    },
  ],
};

const defaultLocation = {
  coords: { latitude: 45.8053848, longitude: 20.4052433 },
  falseLocation: true,
};

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [userLocation, setUserLocation] = React.useState(defaultLocation);
  const [hasPermission, setHasPermission] = React.useState(null);

  const requestLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    setHasPermission(status === "granted");
    if (status !== "granted") {
      return;
    }

    let userLocation = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setUserLocation(userLocation);
  };

  React.useEffect(() => {
    (async () => {
      await requestLocation();
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View style={{ backgroundColor: getThemeColor("background", app.appTheme), flex: 1 }}>
        <AppText theme={app.appTheme}>No access to location</AppText>
        <FlatButton text="Grant access" onPress={async () => await requestLocation()} />
      </View>
    );
  }

  const navigateToShelter = (site, shelter) => {
    navigation.navigate("Booking", { site: site, shelter: shelter });
  };

  return (
    <HomeView
      theme={app.appTheme}
      site={site}
      locations={locations}
      userLocation={userLocation}
      navigateToShelter={navigateToShelter}
      formatData={formatData}
      defaultLocation={defaultLocation}
    />
  );
};

export default Home;
