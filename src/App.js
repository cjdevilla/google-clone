import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
