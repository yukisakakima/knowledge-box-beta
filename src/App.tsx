import { Route, Routes } from "react-router-dom";
import { Editor } from "./assets/pages/editor";
import { NoteList } from "./assets/pages/noteList";
import { GlobalStyle } from "./assets/style/globalStyle";
import { EditorProvider } from "./contexts/EditorProvider";

function App() {
  return (
    <>
      <EditorProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Editor />} />
          <Route path="/note-list" element={<NoteList />} />
        </Routes>
      </EditorProvider>
    </>
  );
}

export default App;
