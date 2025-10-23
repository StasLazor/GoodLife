import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import Pricing from "./pages/Pricing.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default App;