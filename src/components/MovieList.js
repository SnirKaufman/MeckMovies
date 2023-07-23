import React, { useState } from "react";
import "../style/MovieList.css";
import Card from "./Card";

const MovieList = ({ movies, page }) => {
  const [movieArr, setMovieArr] = useState(
    JSON.parse(localStorage.getItem("Favorites"))?.movieArr || []
  );

  return (
    <div className="MovieList_Container">
      {page === "Movies"
        ? movies?.map(({ show }) => {
            return (
              <Card movie={show} key={show.id} setMovieArr={setMovieArr} />
            );
          })
        : movieArr?.map((movie) => {
            return (
              <Card movie={movie} key={movie.id} setMovieArr={setMovieArr} />
            );
          })}
    </div>
  );
};

export default MovieList;
