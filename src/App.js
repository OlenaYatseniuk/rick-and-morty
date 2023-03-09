import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import PublicRoute from "./shared/PublicRoute/PublicRoute";
import PrivateRoute from "./shared/PrivateRoute/PrivateRoute";

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CharacterPage = lazy(() => import("./pages/CharacterPage/CharacterPage"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute restricted redirectTo="/" />}
        >
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateRoute redirectTo="/login" />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route
          path="/:characterId"
          element={<PrivateRoute redirectTo="/login" />}
        >
          <Route index element={<CharacterPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={2000} transition={Slide} />
    </>
  );
}

export default App;
