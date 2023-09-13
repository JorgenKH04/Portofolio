import { SetStateAction, createContext, useContext, useState } from "react";

type ContextType = [string, React.Dispatch<SetStateAction<string>>] | null;

const themeContext = createContext<ContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  const themeState: ContextType = [theme, setTheme];

  return (
    <themeContext.Provider value={themeState}>{children}</themeContext.Provider>
  );
}

function useThemeContext() {
  return useContext(themeContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useThemeContext };
