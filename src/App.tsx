import { useEffect } from "react";

function App() {
  useEffect(() => {
    globalThis
      // .fetch(`${import.meta.env.VITE_API_BASE_URL}/notes`)
      .fetch(`https://notekeeper-api-x9ji.onrender.com/notes`)
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
