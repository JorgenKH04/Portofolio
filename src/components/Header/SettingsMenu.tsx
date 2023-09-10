export function SettingsMenu({
  setLanguage,
}: {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      <button type="button">Dark/Light Mode</button>
      <div>
        <button type="button">Dropdown opener</button>
        <button
          type="button"
          onClick={() => {
            setLanguage("nb-NO");
          }}
        >
          NB
        </button>
        <button
          type="button"
          onClick={() => {
            setLanguage("en-US");
          }}
        >
          EN
        </button>
      </div>
    </>
  );
}
