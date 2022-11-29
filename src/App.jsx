import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
