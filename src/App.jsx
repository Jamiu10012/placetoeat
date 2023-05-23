import Home from "./pages/homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
