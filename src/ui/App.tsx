import { useEffect, useState } from "react";

import styles from "./App.module.css";

const { VITE_API_BASE_URL, PACKAGE_VERSION } = import.meta.env;
const RESORUCE_PATH = "notes";

function App() {
  enum NoteStatus {
    pending = "pending",
    inProgress = "in progress",
    done = "done",
  }

  type Note = {
    name: string;
    description: string;
    status: NoteStatus;
    important: boolean;
  };

  const [notes, setNotes] = useState<Note[] | []>([]);

  useEffect(() => {
    globalThis
      .fetch(`${VITE_API_BASE_URL}/${RESORUCE_PATH}`)
      .then((response) => response.json())
      .then(({ notes }) => {
        setNotes(notes);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header className={styles["main-header"]}>
        <h1>Notekeeper</h1>
        <h2>
          A seamless app for organizing, managing, and accessing your notes.
        </h2>
        <small>{PACKAGE_VERSION}</small>
      </header>
      <main>
        <ul>
          {notes.map((note) => {
            return (
              <li>
                <h3>{note.name}</h3>
                <p>{note.description}</p>
                <p>{note.status}</p>
                <p>{note.important.toString()}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
