import React from "react";
import Animated from "react-native-reanimated";

export const renderShadow = (fall, styles) => {
  const animatedShadowOpacity = Animated.interpolateNode(fall, { inputRange: [0, 1], outputRange: [0.6, 0] });
  return <Animated.View pointerEvents="none" style={[styles.shadowContainer, { opacity: animatedShadowOpacity }]} />;
};
