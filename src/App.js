import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search/:query" element={<SearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
