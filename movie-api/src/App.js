import "./App.css";
import Genres from "./components/genres/genres.component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Movie API</h1>
        <Genres />
      </div>
    </div>
  );
}

export default App;
