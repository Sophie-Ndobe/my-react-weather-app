import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SearchEngine loadCity="Pretoria" />
      </div>
    </div>
  );
}

export default App;
