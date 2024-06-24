import { Route, Routes } from "react-router-dom";
import { EditorPage } from "./pages/editor";
import { NoteList } from "./pages/noteList";
import { GlobalStyle } from "./assets/style/globalStyle";
import { EditorProvider } from "./contexts/EditorProvider";
import { LoginPage } from "./pages/login";
import { AuthContext, AuthProvider } from "./contexts/AuthProvider";
import { useContext } from "react";

function App() {
  return (
    <AuthProvider>
      <EditorProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<EditorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/note-list" element={<NoteList />} />
        </Routes>
      </EditorProvider>
    </AuthProvider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default App;
