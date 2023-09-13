import { createContext, useContext } from "react";

const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
const mobile = width <= 700 ? true : false;

type ContextType = boolean;
const layoutContext = createContext<ContextType>(mobile);

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <layoutContext.Provider value={mobile}>{children}</layoutContext.Provider>
  );
}

function useLayoutContext() {
  return useContext(layoutContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { LayoutProvider, useLayoutContext };
