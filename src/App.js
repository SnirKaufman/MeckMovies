import Header from "./components/header/Header";
import { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState("Movies");

  return (
    <div className="App">
      <Header
        setMovies={setMovies}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <MovieList movies={movies} page={currentPage} />
    </div>
  );
}

export default App;
