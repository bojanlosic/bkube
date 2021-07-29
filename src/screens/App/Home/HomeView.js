import React from "react";
import { View } from "react-native";
import getGlobalStyles from "../../../styles/app/main";
import getStyles from "./Styles";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "./mapStyle";
import CustomMarker from "./components/CustomMarker";
import { lightMapStyle } from "./lightMapStyle";

export default ({ theme, shelters }) => {
  const styles = React.useMemo(() => getStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 44.8065105,
          longitude: 20.4065266,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
        customMapStyle={theme == "default" ? mapStyle : lightMapStyle}
        showsUserLocation={true}
      >
        {shelters?.map((element) => {
          return (
            <Marker key={element.id} onPress={() => console.log(element.id)} coordinate={element.coordinate}>
              <CustomMarker theme={theme} text={element.free} />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
