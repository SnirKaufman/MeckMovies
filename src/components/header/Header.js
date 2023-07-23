import HeaderInput from "./components/HeaderInput";
import HeaderList from "./components/HeaderList";
import "./Header.css";
const Header = ({ setMovies, currentPage, setCurrentPage }) => {
  return (
    <header className="container">
      <a href="/">
        <h1>MeckMovies</h1>
      </a>
      <div className="phoneHeader">
        <HeaderInput setMovies={setMovies} />
      </div>
      <HeaderList setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="pcHeader">
        <HeaderInput setMovies={setMovies} />
      </div>
    </header>
  );
};

export default Header;
