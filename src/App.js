import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import List from "./components/List";
import SearchPage from "./pages/SearchPage";
import Search from "./components/Search";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  const data = [
    { name: "Item 1", description: "This is item 1" },
    { name: "Item 2", description: "This is item 2" },
    { name: "Item 3", description: "This is item 3" },
    { name: "Item 4", description: "This is item 4" },
  ];

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search:query" element={Search} />
          <Route path="/" element={<Home />} />
          <Route path="/searchresultpage" element={<SearchResultPage />} />
          {/* <Route path="/SearchPage:query" element={<SearchPage />} /> */}
        </Routes>
        {/* <div>
          <List title="My List" items={data} />
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
