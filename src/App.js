import "./App.css";
import { Title } from "./component/title/Title";
import { Container } from "react-bootstrap";
import { SearchForm } from "./component/form/SearchForm";
import { MovieList } from "./component/movie-list/MovieList";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <hr />
        <MovieList />
      </Container>
    </div>
  );
};

export default App;
