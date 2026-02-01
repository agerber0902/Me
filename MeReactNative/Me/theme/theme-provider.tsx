import React, { createContext, useContext } from "react";
import { theme, AppTheme } from "./theme";

const ThemeContext = createContext<AppTheme>(theme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
