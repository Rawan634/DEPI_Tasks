import Weather from "./Pages/Weather"; 
import Home from "./Shared/Home"; 
import WeatherClass from "./Pages/WeatherClass"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Weather News */}
        <Route path="/weather" element={<Weather />} />
        {/* Weather news Class */}
        <Route path="/weatherclass" element={<WeatherClass />} />
      </Routes>
  );
}

export default App;
