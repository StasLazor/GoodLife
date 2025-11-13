import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./components/Login/Login.jsx"; 
import Pricing from "./pages/Pricing.jsx";
import Classes from "./pages/Classes.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/classes" element={<Classes />} />
    </Routes>
  );
}

export default App;