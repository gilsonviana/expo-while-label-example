import { ClientColors, ClientTheme } from "@/constants/theme";

export const colors: ClientColors = {
  primary: "#AA3580",
  secondary: "#AAD100",
};

const lightTheme: ClientTheme = {
  tabBarStyle: {
    backgroundColor: colors.primary,
  },
};

export default {
  lightTheme,
}
