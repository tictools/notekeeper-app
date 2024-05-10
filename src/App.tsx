import { useEffect } from "react";

function App() {
  const { API_BASE_URL, PACKAGE_VERSION } = import.meta.env;
  const RESORUCE_PATH = "notes";

  console.log(import.meta.env.PACKAGE_VERSION);
  useEffect(() => {
    globalThis
      .fetch(`${API_BASE_URL}/${RESORUCE_PATH}`)
      .then((response) => response.json())
      .then((notes) => console.log(notes))
      .catch((error) => console.log(error));
  }, [API_BASE_URL]);

  return (
    <>
      <header>
        <h1>Notekeeper</h1>
        <h2>
          A seamless app for organizing, managing, and accessing your notes.
        </h2>
        <small>{PACKAGE_VERSION}</small>
      </header>
    </>
  );
}

export default App;
