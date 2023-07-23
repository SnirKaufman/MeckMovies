import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BasicModal from "./Modal";

const Card = ({ movie, setMovieArr }) => {
  const [open, setOpen] = useState(false);
  const [isMovieFavorite, setIsMovieFavorite] = useState(
    !!localStorage.getItem("Favorites")?.includes(movie.id)
  );

  const addMovieToFavorites = () => {
    const favoritesMovies = JSON.parse(localStorage.getItem("Favorites"));
    if (!favoritesMovies) {
      localStorage.setItem(
        "Favorites",
        JSON.stringify({ movieArr: [movie], movieId: [movie.id] })
      );
      setIsMovieFavorite(true);
      return;
    }
    favoritesMovies.movieArr.push(movie);
    favoritesMovies.movieId.push(movie.id);
    localStorage.setItem("Favorites", JSON.stringify(favoritesMovies));
    setIsMovieFavorite(true);
    setMovieArr(favoritesMovies.movieArr);
  };

  const removeMovieFromFavorites = () => {
    const favoritesMovies = JSON.parse(localStorage.getItem("Favorites"));
    const movieIndex = favoritesMovies.movieId.indexOf(movie.id);
    favoritesMovies.movieArr.splice(movieIndex, 1);
    favoritesMovies.movieId.splice(movieIndex, 1);
    localStorage.setItem("Favorites", JSON.stringify(favoritesMovies));
    setIsMovieFavorite(false);
    setMovieArr(favoritesMovies.movieArr);
  };

  return (
    <div className="pic-container">
      <BasicModal open={open} setOpen={setOpen} movie={movie} />
      <div onClick={() => setOpen(true)} className="card">
        <img className="picture" src={movie.image?.medium} alt="no-pic" />
      </div>
      <h1 className="title">
        {movie.name}
        {!isMovieFavorite ? (
          <AiOutlineStar onClick={addMovieToFavorites} />
        ) : (
          <AiFillStar onClick={removeMovieFromFavorites} />
        )}
      </h1>
      <div className="detail-container">
        <p className="year">
          {movie.premiered ? movie.premiered?.slice(0, 4) : "2000"}
        </p>
        <p>{movie.language}</p>
      </div>
    </div>
  );
};

export default Card;
