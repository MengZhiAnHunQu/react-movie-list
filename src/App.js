import { useState } from "react";
import "./App.css";
import { Title } from "./component/title/Title";
import { Alert, Container } from "react-bootstrap";
import { SearchForm } from "./component/form/SearchForm";
import { MovieList } from "./component/movie-list/MovieList";
import { fetchMovie } from "./helpers/axiosHelper";
import { CustomCard } from "./component/card/CustomCard";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const [category, setCategory] = useState("");

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);
    setMovie(movie.data);
    console.log(movie.data.Plot);
  };

  const handleOnAddToList = (cat, movie) => {
    const obj = { ...movie, cat };
    // adding movie for the first time
    !movieList.length && setMovieList([obj]); //if the left side is true , then run right side
    //adding after first time
    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);
    if (!isExist) {
      setMovieList([...movieList, obj]);

      setMovie({});
    } else {
      alert("Movie already in the list");
    }
  };

  //console.log(movieList);

  const handleOnDelete = (imdbID) => {
    const filteredList = movieList.filter((item) => item.imdbID !== imdbID);
    console.log(filteredList);

    setMovieList(filteredList);

    console.log(imdbID);
  };

  const moviesToDisplay = category
    ? movieList.filter((item) => item.cat === category)
    : movieList;

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />
        <div className="d-flex justify-content-center">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList} />
          )}

          {movie.Response === "False" && (
            <Alert variant="danger">{movie.Error}</Alert>
          )}
        </div>
        {category || "all"} selected
        <hr />
        <MovieList
          movieList={moviesToDisplay}
          handleOnDelete={handleOnDelete}
          setCategory={setCategory}
        />
      </Container>
    </div>
  );
};

export default App;
