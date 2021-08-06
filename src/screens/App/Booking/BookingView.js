import React from "react";
import { TouchableOpacity, View, Dimensions, Platform } from "react-native";
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
import { renderShadow } from "./BottomSheetBackdrop";

export default ({ theme, site, shelter, navigateBack, dispBookShelter, openCamera }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);
  const bottomSheetRef = React.useRef(null);
  let fall = new Animated.Value(1);

  // variables
  const snapPoints = React.useMemo(() => [`${_generalSize(35)}%`, 0], []);

  const bottomSheetContainer = () => (
    <View style={styles.contentContainer}>
      <View style={{ alignItems: "center", paddingVertical: _generalSize(16) }}>
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
            dispBookShelter();
          }}
          theme={theme}
          text="Confirm booking"
        />
        <OutlineButton onPress={() => bottomSheetRef.current.snapTo(1)} theme={theme} style={{ marginTop: _generalSize(12) }} text="Cancel booking" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={navigateBack}>
          <ArrowLeft width={_generalSize(28)} style={{ color: getThemeColor("text", theme) }} />
        </TouchableOpacity>
      </View>
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
            marginLeft={8}
            text="Directions"
          />
          <OutlineButton
            theme={theme}
            icon={<Report width={_generalSize(20)} style={{ color: getThemeColor("text", theme) }} />}
            style={styles.shelterDirectionButton}
            paddingVertical={8}
            fontSize={14}
            marginLeft={8}
            text="Report"
          />
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
            text="Book shelter"
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
