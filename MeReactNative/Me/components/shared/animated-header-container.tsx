import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Animated,
  View,
  Text,
  Easing,
  Dimensions,
} from "react-native";
import LoadingSpinner from "./loading-spinner";

const { height } = Dimensions.get("window");

const AnimatedHeaderContainer = ({ isLoading }: { isLoading: boolean }) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: -height / 2 + 100,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),

          Animated.sequence([
            Animated.timing(opacity, {
              toValue: 0,
              duration: 500,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 1,
              duration: 500,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }),
          ]),
        ]).start();
      }, 1000);
    }
  }, [isLoading, opacity, translateY]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={
            (styles.contentContainer,
            {
              transform: [{ translateY }],
              opacity,
            })
          }
        >
          <Text style={styles.text}>Me.</Text>
          <LoadingSpinner size={"large"} visible={isLoading} />
        </Animated.View>
      </View>
    </>
  );
};

export default AnimatedHeaderContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4444",
  },
  contentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 50,
    width: "100%",
    textAlign: "center",
    padding: 15,
    color: "#FFFF", //theme.colors.primary,
  },
});
