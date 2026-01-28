import { ClientTheme } from "@/constants/theme";
import { createContext, PropsWithChildren, use, useEffect, useState } from "react";

const getClientTheme = () => {
  const client = process.env.EXPO_PUBLIC_CLIENT as string;

  if (client === "wyndham") {
    return import("@/clients/wyndham/theme");
  } else if (client === "hilton") {
    return import("@/clients/hilton/theme");
  }

  throw new Error(`Unknown client: ${client}`);
};

interface ThemeProviderContext {
  defaultTheme: ClientTheme;
}

const ThemeContext = createContext({} as ThemeProviderContext);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isLoadingTheme, setIsLoadingTheme] = useState(true)
  const [defaultTheme, setDefaultTheme] = useState<ClientTheme>()

  useEffect(() => {
    const loadTheme = async () => {
      const themeModule = await getClientTheme();
      setDefaultTheme(themeModule.default.lightTheme);
      setIsLoadingTheme(false);
    }

    loadTheme();
  }, [])

  return (
    <ThemeContext.Provider value={{ defaultTheme: defaultTheme! }}>
      {!isLoadingTheme && children}
    </ThemeContext.Provider>
  )
}

export const useClientTheme = () => {
  const { defaultTheme } = use(ThemeContext);

  return defaultTheme;
};

export default ThemeProvider;
