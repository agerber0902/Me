import ProgressBar from "@/components/seventyFiveHard/progress-bar";
import LoadingSpinner from "@/components/shared/loading-spinner";
import ProgressCard from "@/components/shared/progress-card";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const timeout = 3000; //3 seconds

    const timer = setTimeout(() => {
      // Clear the loading message
      setIsLoading(false);
    }, timeout);

    //Clear Timer
    return () => clearTimeout(timer);
  });

  return (
    <>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.text}>Me.</Text>
        <LoadingSpinner size="large" visible={isLoading} />
        {!isLoading && (
          <ProgressCard>
            <ProgressBar />
          </ProgressCard>
        )}
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    //justifyContent: "center",
    padding: 15,
    width: "100%",
    // flex: 1,
    gap: 8,
  },
  text: {
    fontWeight: "bold",
    fontSize: 75,
    width: "100%",
    margin: "auto",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
