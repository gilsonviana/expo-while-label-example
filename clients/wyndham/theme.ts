import { ClientColors, ClientTheme } from "@/constants/theme";

export const colors: ClientColors = {
  primary: "#0055A4",
  secondary: "#FFD100",
};

const lightTheme: ClientTheme = {
  tabBarStyle: {
    backgroundColor: colors.secondary,
  },
};

const darkTheme: ClientTheme = {
  tabBarStyle: {
    backgroundColor: colors.secondary,
  },
};

export default {
  lightTheme,
  darkTheme,
}
