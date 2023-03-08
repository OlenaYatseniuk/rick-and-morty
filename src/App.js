import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:characterId" element={<CharacterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
