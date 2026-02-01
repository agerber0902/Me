import AnimatedHeaderContainer from "@/components/shared/animated-header-container";

import { homeStyles } from "@/stylesheets/home/home";
import { useTheme } from "@/theme/theme-provider";
import { useEffect, useState } from "react";
import {
  Platform,
  UIManager
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const HomeScreen = () => {
  const theme = useTheme();
  const styles = homeStyles(theme);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER */}
      <AnimatedHeaderContainer isLoading={isLoading}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
