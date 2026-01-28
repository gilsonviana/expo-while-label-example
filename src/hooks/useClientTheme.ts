import wyndhamThemes from "@/clients/wyndham/theme";

const clientsThemes = {
  wyndham: wyndhamThemes,
};

const clientThemes =
  clientsThemes[process.env.EXPO_PUBLIC_CLIENT as keyof typeof clientsThemes];

export const useClientTheme = () => {
  const defaultTheme = clientThemes.lightTheme;

  return {
    ...defaultTheme,
  };
};
