import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RESORUCE_PATH = "notes";

function App() {
  console.log(import.meta.env.PACKAGE_VERSION);
  useEffect(() => {
    globalThis
      .fetch(`${API_BASE_URL}/${RESORUCE_PATH}`)
      .then((response) => response.json())
      .then((notes) => console.log(notes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header>
        <h1>Notekeeper</h1>
        <h2>
          A seamless app for organizing, managing, and accessing your notes.
        </h2>
        <small>import.meta</small>
      </header>
    </>
  );
}

export default App;
