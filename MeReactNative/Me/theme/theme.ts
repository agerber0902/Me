export const theme = {
  colors: {
    background: "#000000",
    surface: "#4d248b",
    primary: "#FFFFFF",
    text: "#FFFFFF",
    muted: "#6c3ab6",
    border: "#E5E7EB",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  radius: {
    sm: 8,
    md: 12,
    lg: 20,
  },

  elevation: {
    sm: 2,
    md: 6,
    lg: 10,
  },
};

export type AppTheme = typeof theme;
