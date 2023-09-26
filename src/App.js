import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1 className="mt-5">My React Weather App</h1>
      <SearchEngine />
    </div>
  );
}

export default App;
