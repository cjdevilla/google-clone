import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Search from "./components/Search";
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

