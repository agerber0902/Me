import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FadeAnimationContainer from "./fade-out-animation-container";

export type LoadingSpinerProps = {
  color?: string | undefined;
  size?: "small" | "large" | number | undefined;
  text?: string | undefined;
  isVertical?: boolean | undefined;
  visible?: boolean | undefined;
};

const LoadingSpinner = (props: LoadingSpinerProps) => {
  return (
    <>
      <FadeAnimationContainer visible={props.visible}>
        <View
          style={[
            styles.container,
            props.isVertical ? styles.vertical : styles.horizontal,
          ]}
        >
          <Text style={styles.text}>{props.text}</Text>
          <ActivityIndicator
            size={props.size ?? "small"}
            color={props.color ?? styles.text.color}
          />
        </View>
      </FadeAnimationContainer>
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
