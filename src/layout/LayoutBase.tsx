import { NavBar } from "../components/Header/NavBar";

export function LayoutBase({
  children,
  layout,
}: {
  children: React.ReactNode;
  layout: string;
}) {
  return (
    <>
      <header>
        <NavBar layout={layout} />
      </header>
      <main>{children}</main>
      <footer>
        <h2>temp</h2>
      </footer>
    </>
  );
}
