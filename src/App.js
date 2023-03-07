import "./styles/index.scss";

import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes, Navigate } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage/CharacterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:characterId" element={<CharacterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
