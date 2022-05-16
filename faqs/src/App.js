import "./App.css";
import NavBar from "./component/navBar/NavBar";
import Faqs from "./component/FAQs/Faqs";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
}

export default App;
