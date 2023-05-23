import Home from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import ResponsePage from "./pages/responsepage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/response" element={<ResponsePage />} />
      </Routes>
    </div>
  );
}

export default App;
