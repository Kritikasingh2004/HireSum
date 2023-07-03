import "./App.css";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Candidate from "./components/Candidate";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

AOS.init();

function App() {
  return (
    <BrowserRouter basename="/hiresum">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/candidate" element={<Candidate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
