import { StyleSheet, Text, View } from "react-native";

const ProgressBar = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>75 Hard Progress</Text>
        <Text style={styles.text}>29/75</Text>
      </View>
    </>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  text: {
    fontWeight: "bold",
    width: "40%",
    margin: "auto",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
