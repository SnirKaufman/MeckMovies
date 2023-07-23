import axios from "axios";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import "./HeaderInput.css";

const HeaderInput = ({ setMovies }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    apiGetMovies("batman");
  }, []);

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const apiGetMovies = (name) => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${name}`)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    apiGetMovies(search);
    setSearch("");
  };

  return (
    <form className="form" onSubmit={searchSubmitHandler}>
      <input
        className="searchbar"
        placeholder="Search for a movie"
        value={search}
        onChange={searchChangeHandler}
      ></input>
      <button className="btn" type="submit">
        Submit
      </button>
      <span className="pageIcon">
        <BiSearch style={{ color: "#cc5500" }} size={25} />
      </span>
    </form>
  );
};

export default HeaderInput;
