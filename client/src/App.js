import "./App.css";
import Login from "./Login";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  );
}
