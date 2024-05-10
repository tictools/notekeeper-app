import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RESORUCE_PATH = "notes";

function App() {
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
      </header>
    </>
  );
}

export default App;
