import "./App.css";
import React, { useState } from "react";

import NavBar from "./component/navBar/NavBar";
import Faqs from "./pages/FAQs/Faqs";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import UsersPage from "./pages/usersPage/UsersPage";
function App() {
  const [userId, setUserId] = useState("");

  return (
    <div className="App">
      <NavBar userId={userId} setUserId={setUserId} />
      <Routes>
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/login" element={<LoginPage setUserId={setUserId} />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
