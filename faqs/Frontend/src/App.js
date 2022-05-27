import "./App.css";
import NavBar from "./component/navBar/NavBar";
import Faqs from "./pages/FAQs/Faqs";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import UsersPage from "./pages/usersPage/UsersPage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/users" element={<UsersPage />}/>
   
      </Routes>
    </div>
  );
}

export default App;
