import React from "react";
import { View, TouchableOpacity as TouchableOpacityIOS, Platform } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import getStyles from "./Styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./mapStyle";
import CustomMarker from "./components/CustomMarker";
import { lightMapStyle } from "./lightMapStyle";
import { Portal, PortalHost } from "@gorhom/portal";
// import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheet from "reanimated-bottom-sheet";
import FlatInput from "../../../components/Inputs/FlatInput";
import AppText from "../../../components/texts/AppText";
import { _generalSize } from "../../../constants/sizeCalculator";
import fonts from "../../../constants/fonts";
import Stopwatch from "../../../../assets/images/svg/stopwatch.svg";
import LocationPin from "../../../../assets/images/svg/location-pin-alt.svg";
import getThemeColor from "../../../constants/colors/getThemeColor";
import BalanceContainer from "../components/BalanceContainer";
import { capitalizeLetter } from "../../../constants/capitalizeLetter";

const numColumns = 3;

export default ({ theme, site, locations, userLocation, navigateToShelter, formatData }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const bottomSheetRef = React.useRef(null);

  // variables
  const snapPoints = React.useMemo(() => ["90%", "20%", 0], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const shelterInfo = (theme, item, shelterStatus, shelterBackgroundColor, textColorShelter, textColor) => {
    return (
      <View style={[styles.shelterContainer, { backgroundColor: shelterBackgroundColor }]}>
        <AppText theme={theme} text="Shelter" color={textColorShelter} />
        <AppText theme={theme} text={item?.number} fontSize={24} fontFamily={fonts.Heebo_700Bold} color={textColor} />
        <AppText theme={theme} text={shelterStatus} fontSize={16} fontFamily={fonts.Heebo_500Medium} color={textColor} />
      </View>
    );
  };

  const shelterCard = ({ item, index }) => {
    if (item?.empty) {
      return <View key={item?.id} style={styles.sheltersGrid}></View>;
    }
    const shelterStatus = capitalizeLetter(item?.status);
    const shelterBackgroundColor =
      item?.status === "free"
        ? getThemeColor("primary", theme)
        : item?.status === "reserved"
        ? getThemeColor("darkMedium2", theme)
        : getThemeColor("darkMedium2-06", theme);
    const textColorShelter = item?.status === "free" ? "white" : item?.status === "reserved" ? "primaryPressed" : "textInputPlaceholder";
    const textColor = item?.status === "free" ? "white" : item?.status === "reserved" ? "primaryPressed" : "text";
    return (
      <View key={item?.id} style={styles.sheltersGrid}>
        {Platform.OS === "ios" ? (
          <TouchableOpacityIOS
            onPress={() => {
              sheetRef.current.snapTo(2);
              navigateToShelter(site, item);
            }}
            style={{ height: "100%" }}
          >
            {shelterInfo(theme, item, shelterStatus, shelterBackgroundColor, textColorShelter, textColor)}
          </TouchableOpacityIOS>
        ) : (
          <TouchableOpacity
            onPress={() => {
              sheetRef.current.snapTo(2);
              navigateToShelter(site, item);
            }}
            style={{ height: "100%" }}
          >
            {shelterInfo(theme, item, shelterStatus, shelterBackgroundColor, textColorShelter, textColor)}
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const bottomSheetContainer = () => (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <View style={styles.headerHandle}></View>
      </View>
      <View style={styles.bottomSheetInfo}>
        <AppText theme={theme} text={site?.name} fontSize={16} color="navigationTextWhite" />
        <AppText theme={theme} text={site?.street} fontSize={20} fontFamily={fonts.Heebo_500Medium} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Stopwatch style={{ color: getThemeColor("textInputPlaceholder", theme) }} width={_generalSize(16)} />
          <AppText theme={theme} style={{ paddingLeft: _generalSize(4) }} text="11 min" fontSize={12} color="textInputPlaceholder" />
          <AppText theme={theme} style={{ paddingHorizontal: _generalSize(8) }} text="-" fontSize={12} color="textInputPlaceholder" />
          <LocationPin style={{ color: getThemeColor("textInputPlaceholder", theme) }} width={_generalSize(16)} />
          <AppText theme={theme} style={{ paddingLeft: _generalSize(4) }} text="600 m" fontSize={12} color="textInputPlaceholder" />
        </View>
        <View style={{ marginTop: _generalSize(20) }}>
          <AppText theme={theme} text="Shelters" fontSize={16} fontFamily={fonts.Heebo_500Medium} color="navigationTextWhite" />
          <AppText theme={theme} text="Select shelter for more actions" fontSize={12} color="textInputPlaceholder" />
        </View>
      </View>
      <View style={styles.sheltersContainer}>
        <FlatList contentContainerStyle={{ flexGrow: 1 }} data={formatData(site?.shelters, numColumns)} renderItem={shelterCard} numColumns={3} />
      </View>
      <BalanceContainer theme={theme} />
    </View>
  );
  const sheetRef = React.useRef(null);

  return (
    <View style={styles.container}>
      {userLocation && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: userLocation?.coords?.latitude,
            longitude: userLocation?.coords?.longitude,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          customMapStyle={theme == "default" ? mapStyle : lightMapStyle}
          showsUserLocation={true}
          followsUserLocation={true}
        >
          {locations?.map((element) => {
            return (
              <Marker key={element.id} onPress={() => sheetRef.current.snapTo(0)} coordinate={element.coordinate}>
                <CustomMarker theme={theme} text={element.free} />
              </Marker>
            );
          })}
        </MapView>
      )}
      <Portal>
        <BottomSheet initialSnap={2} ref={sheetRef} snapPoints={snapPoints} borderRadius={_generalSize(16)} renderContent={bottomSheetContainer} />
      </Portal>
      <PortalHost name="custom_host" />
    </View>
  );
};
