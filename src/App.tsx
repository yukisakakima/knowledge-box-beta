import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Editor } from "./assets/pages/editor";
import { NoteList } from "./assets/pages/noteList";
import { GlobalStyle } from "./assets/style/globalStyle";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Editor text={text} setText={setText} />} />
        <Route path="/note-list" element={<NoteList setText={setText} />} />
      </Routes>
    </>
  );
}

export default App;
