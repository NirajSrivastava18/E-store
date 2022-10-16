import "./App.css";
// import NavBar from "./components/Navbar/NavBar";
// import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"   element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
