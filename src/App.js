import { useState } from "react";
import "./App.css";
import { Title } from "./component/title/Title";
import { Alert, Container } from "react-bootstrap";
import { SearchForm } from "./component/form/SearchForm";
import { MovieList } from "./component/movie-list/MovieList";
import { fetchMovie } from "./helpers/axiosHelper";
import { CustomCard } from "./component/card/CustomCard";

const App = () => {
  const [movieMainList, setMainMovieList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);
    setMovie(movie.data);
  };

  const handleOnAddToList = (category, movie) => {
    const obj = { ...movie, category };
    // adding movie for the first time
    !movieList.length && setMovieList([obj]) && setMainMovieList([obj]); //if the left side is true , then run right side
    //adding after first time
    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);
    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMainMovieList([...movieMainList, obj]);
      setMovie({});
    } else {
      alert("Movie already in the list");
    }
  };

  //console.log(movieList);

  const handleOnDelete = (imdbID) => {
    const filteredList = movieMainList.filter((item) => item.imdbID !== imdbID);
    console.log(filteredList);

    setMovieList(filteredList);
    setMainMovieList(filteredList);
    console.log(imdbID);
  };

  const hanleOnSelect = (category) => {
    let filterArgs = [];

    if (category) {
      filterArgs = movieMainList.filter((item) => item.category === category);
    } else {
      filterArgs = movieMainList;
    }
    console.log(filterArgs);
    setMovieList(filterArgs);
    //if happy selected
    // if sad selected
    //all selected
  };

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
        <hr />
        <MovieList
          movieList={movieList}
          handleOnDelete={handleOnDelete}
          hanleOnSelect={hanleOnSelect}
        />
      </Container>
    </div>
  );
};

export default App;
