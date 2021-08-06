import React from "react";
import { View, Dimensions, Image } from "react-native";
import getStyles from "./Styles";
import AppText from "../../../components/texts/AppText";
import ArrowLeft from "../../../../assets/svg/arrow-left.svg";
import { _generalSize } from "../../../constants/sizeCalculator";
import getThemeColor from "../../../constants/colors/getThemeColor";
import fonts from "../../../constants/fonts";
import OutlineButton from "../../../components/buttons/OutlineButton";
import Directions from "../../../../assets/svg/directions.svg";
import Report from "../../../../assets/svg/report.svg";
import BalanceContainer from "../components/BalanceContainer";
import FlatButton from "../../../components/buttons/FlatButton";
import { Portal, PortalHost } from "@gorhom/portal";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import { renderShadow } from "../components/BottomSheetBackdrop";
import ParkingCircle from "../../../../assets/svg/parking-circle-20.svg";
import Lock from "../../../../assets/svg/lock.svg";

export default ({ theme, site, shelter, navigateBack, openCamera, dispPayShelter }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const bottomSheetRef = React.useRef(null);
  let fall = new Animated.Value(1);

  // variables
  const snapPoints = React.useMemo(() => [`${_generalSize(35)}%`, 0], []);

  const bottomSheetContainer = () => (
    <View style={styles.contentContainer}>
      <View style={{ alignItems: "center", padding: _generalSize(20) }}>
        <AppText
          style={{ textAlign: "center" }}
          theme={theme}
          text="Time will start billing the moment you confirm booking. Are you sure you want to book?"
          fontSize={16}
          fontFamily={fonts.Heebo_500Medium}
        />
      </View>
      <View>
        <FlatButton
          onPress={() => {
            bottomSheetRef.current.snapTo(1);
            dispPayShelter();
          }}
          theme={theme}
          text="Confirm payment"
        />
        <OutlineButton onPress={() => bottomSheetRef.current.snapTo(1)} theme={theme} style={{ marginTop: _generalSize(12) }} text="Cancel payment" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <View>
        <TouchableOpacity onPress={navigateBack}>
          <ArrowLeft width={_generalSize(28)} style={{ color: getThemeColor("text", theme) }} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.shelterContainer}>
        <AppText theme={theme} text={`Shelter ${shelter?.number}`} fontSize={24} fontFamily={fonts.Heebo_700Bold} color="primary" />
        <AppText theme={theme} text={site?.name} color="navigationTextWhite" style={{ marginTop: _generalSize(8) }} />
        <AppText theme={theme} text={site?.street} fontSize={16} fontFamily={fonts.Heebo_500Medium} style={{ marginTop: _generalSize(8) }} />
        <View style={{ flexDirection: "row", marginTop: _generalSize(16), maxWidth: "60%" }}>
          <OutlineButton
            theme={theme}
            icon={<Directions width={_generalSize(20)} style={{ color: getThemeColor("text", theme) }} />}
            style={styles.shelterDirectionButton}
            paddingVertical={8}
            fontSize={14}
            fontFamily={fonts.Heebo_400Regular}
            marginLeft={8}
            text="Directions"
          />
          <OutlineButton
            theme={theme}
            icon={<Report width={_generalSize(20)} style={{ color: getThemeColor("text", theme) }} />}
            style={styles.shelterDirectionButton}
            paddingVertical={8}
            fontSize={14}
            fontFamily={fonts.Heebo_400Regular}
            marginLeft={8}
            text="Report"
          />
        </View>
        <View style={{ marginTop: _generalSize(16), flexDirection: "row" }}>
          <View style={[styles.shelterInUseContainer, { marginEnd: _generalSize(6) }]}>
            <AppText theme={theme} text="In use" />
            <AppText theme={theme} text="00:02:16" fontSize={24} fontFamily={fonts.Heebo_500Medium} />
          </View>
          <View style={[styles.shelterInUseContainer, { marginStart: _generalSize(6) }]}>
            <AppText theme={theme} text="Amount to pay" />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AppText theme={theme} text="0.1" fontSize={24} fontFamily={fonts.Heebo_500Medium} />
              <View>
                <ParkingCircle height={_generalSize(4)} style={{ color: getThemeColor("darkMedium2", theme) }} />
                <ParkingCircle width={_generalSize(20)} style={{ color: getThemeColor("text", theme) }} />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", position: "relative" }}>
            <Image style={{ position: "absolute", top: 0, left: 0 }} source={require("../../../../assets/images/BGError.png")} />
            <Lock width={_generalSize(80)} style={{ color: getThemeColor("text", theme) }} />
            <AppText theme={theme} text="Shelter locked" fontSize={16} />
          </View>
        </View>
      </View>
      <View>
        <BalanceContainer theme={theme} />
        <View>
          <FlatButton onPress={openCamera} theme={theme} text="Scan QR code" />
          <OutlineButton
            onPress={() => {
              bottomSheetRef.current.snapTo(0);
            }}
            theme={theme}
            style={{ marginTop: _generalSize(12) }}
            text="Checkout and pay"
          />
        </View>
      </View>
      <Portal>
        {renderShadow(fall, styles)}
        <BottomSheet
          initialSnap={1}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          borderRadius={_generalSize(16)}
          renderContent={bottomSheetContainer}
          callbackNode={fall}
          enabledContentGestureInteraction={false}
        />
      </Portal>
      <PortalHost name="custom_host" />
    </View>
  );
};
