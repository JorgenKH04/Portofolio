import { NavBar } from "../components/common/NavBar";

export function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <h2>temp</h2>
      </footer>
    </>
  );
}
