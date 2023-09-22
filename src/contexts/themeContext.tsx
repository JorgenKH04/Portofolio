import {
  SetStateAction,
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactNode,
} from "react";

type ContextType = [string, Dispatch<SetStateAction<string>>];

const themeContext = createContext<ContextType>({} as ContextType);

function ThemeProvider({ children }: { children: ReactNode }) {
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
