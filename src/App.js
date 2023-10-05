import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Search />
        <SearchEngine city=" " />
      </div>
    </div>
  );
}

export default App;
