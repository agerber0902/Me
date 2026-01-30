import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export type ProgressCardProps = {
    children: ReactNode
}

const ProgressCard = ({children}: ProgressCardProps) => {
  return (
    <>
      <View style={styles.card}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#524c4c",
    color: "#000000",
    borderRadius: 16,
    width: '50%',
    // height: 100,

    // iOS shadow
    shadowColor: "#FFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    // Android elevation
    elevation: 6,

    padding: 16,
    margin: 12,
  },
});

export default ProgressCard;
