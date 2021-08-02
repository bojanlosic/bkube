import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/App/Home/HomeScreen";
import More from "../screens/App/More/MoreScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { defaultColors as Colors } from "../constants/colors/Colors";
import { useSelector } from "react-redux";
import getThemeColor from "../constants/colors/getThemeColor";
import Scan from "../screens/App/Scan/ScanScreen";
import MapMarker from "../../assets/images/svg/map-marker.svg";
import QRCodeScan from "../../assets/images/svg/qrcode-scan.svg";
import Bars from "../../assets/images/svg/bars.svg";
import { _generalSize } from "../constants/sizeCalculator";
import AppText from "../components/texts/AppText";
import Shelter from "../screens/App/Shelter/ShelterScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { Text, View } from "react-native";
// const TopTab = createMaterialTopTabNavigator();

// TOP TAB NAVIGATION
// const Chat = () => {
//   return (
//     <View>
//       <Text>CHAT</Text>
//     </View>
//   );
// };
// const Video = () => {
//   return (
//     <View>
//       <Text>VIDEO</Text>
//     </View>
//   );
// };

// const Search = () => {
//   return (
//     <TopTab.Navigator>
//       <TopTab.Screen name="Chat" component={Chat} />
//       <TopTab.Screen name="Video" component={Video} />
//     </TopTab.Navigator>
//   );
// };

// const SearchStackNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Search" component={Search} />
//     </Stack.Navigator>
//   );
// };

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Shelter" component={Shelter} />
    </Stack.Navigator>
  );
};

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  const app = useSelector((state) => state.app);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: getThemeColor("primaryPressed", app.appTheme),
        activeBackgroundColor: getThemeColor("background", app.appTheme),
        inactiveBackgroundColor: getThemeColor("background", app.appTheme),
      }}
      initialRouteName="Explore"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          color = focused ? getThemeColor("primaryPressed", app.appTheme) : getThemeColor("white", app.appTheme);
          if (route.name === "Explore") {
            return <MapMarker width={_generalSize(size)} color={color} />;
          } else if (route.name === "Scan QR") {
            return <QRCodeScan size={_generalSize(size)} color={color} />;
          } else if (route.name === "More") {
            return <Bars size={_generalSize(size)} color={color} />;
          }
          return <MaterialIcons name="dashboard" size={size} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          color = focused ? "primaryPressed" : "navigationTextWhite";
          if (route.name === "Explore") {
            return <AppText text="Explore" theme={app.appTheme} color={color} fontSize={12} />;
          } else if (route.name === "Scan QR") {
            return <AppText text="Scan QR" theme={app.appTheme} color={color} fontSize={12} />;
          } else if (route.name === "More") {
            return <AppText text="More" theme={app.appTheme} color={color} fontSize={12} />;
          }
        },
      })}
    >
      <Tab.Screen name="Explore" component={HomeStackNavigator} />
      <Tab.Screen name="Scan QR" component={Scan} />
      <Tab.Screen name="More" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export { Tabs };
