import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import "./HeaderList.css";
const HeaderList = ({ setCurrentPage, currentPage }) => {
  return (
    <div className="nav">
      <ul className="pages">
        <li
          onClick={() => setCurrentPage("Movies")}
          className={`links ${currentPage === "Movies" ? "active" : ""} `}
          href="/"
        >
          <p className="pageName">Movies</p>
          <span className="pageIcon">
            <BiCameraMovie size={25} />
          </span>
        </li>

        <li
          onClick={() => setCurrentPage("Favorites")}
          className={`links ${currentPage === "Favorites" ? "active" : ""} `}
          href="/"
        >
          <p className="pageName">Favorites</p>
          <span className="pageIcon">
            <AiOutlineHeart size={25} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderList;
