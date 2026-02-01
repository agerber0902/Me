import {
  ActivityIndicator,
  Animated,
  Easing,
  StyleSheet,
  Text,
} from "react-native";
import { useEffect, useRef } from "react";

export type LoadingSpinerProps = {
  color?: string | undefined;
  size?: "small" | "large" | number | undefined;
  text?: string | undefined;
  isVertical?: boolean | undefined;
  visible?: boolean | undefined;
};

const LoadingSpinner = (props: LoadingSpinerProps) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: props.visible ? 1 : 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [props.visible, opacity]);

  return (
    <>
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.text}>{props.text}</Text>
        <ActivityIndicator
          size={props.size ?? "small"}
          color={props.color ?? styles.text.color}
        />
      </Animated.View>
    </>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    //gap: 8,
  },
  horizontal: {
    flexDirection: "row",
    padding: 10,
  },
  vertical: {
    flexDirection: "column",
    padding: 10,
  },
  text: {
    color: "#FFFFFF",
  },
});
