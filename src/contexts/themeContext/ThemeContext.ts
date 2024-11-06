import {
  createContext,
  useContext,
} from "react";

type ThemeContextProps = {
  isDark: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export default ThemeContext

export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return context;
};

