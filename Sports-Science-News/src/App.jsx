import Science from "./Pages/Science"; 
import Home from "./Shared/Home"; 
import Sports from "./Pages/Sports"; 
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />
        {/* Science News */}
        <Route path="/science" element={<Science />} />
        {/* Sports News */}
        <Route path="/sports" element={<Sports />} />
      </Routes>
  );
}

export default App;
