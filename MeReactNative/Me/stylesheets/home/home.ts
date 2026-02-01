import { StyleSheet } from "react-native";
import { AppTheme } from "../../theme/theme";

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: theme.colors.background,
      flexDirection: "column",
      padding: 15,

      width: "100%",
      height: "100%",
      flex: 1,
    },

    headerContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",

      padding: 5,
    },

    headerText: {
      fontWeight: "bold",
      fontSize: 75,
      width: "100%",
      textAlign: "center",
      padding: 15,
      color: theme.colors.primary,
    },

    centered: {
      margin: "auto"
    }

  });
