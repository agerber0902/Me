import { StyleSheet, Animated } from "react-native";
import { ReactNode, useEffect, useRef, useState } from "react";

export type FadeOutAnimationContainerProps = {
  visible?: boolean;
  children: ReactNode;
};

const FadeOutAnimationContainer = ({
  visible = true,
  children,
}: FadeOutAnimationContainerProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.95)).current;

  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);

      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.95,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShouldRender(false);
      });
    }
  }, [visible, opacity, scale]);

  if (!shouldRender) return null;

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          opacity,
          transform: [{ scale }],
        },
      ]}
    >
        {children}
    </Animated.View>
  );
};

export default FadeOutAnimationContainer;

const styles = StyleSheet.create({
  animated: {
    width: "100%",
  },
});