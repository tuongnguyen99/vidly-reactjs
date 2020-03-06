import React, { Component } from "react";
import { getMovies, deleteMovie } from "./../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";
import _ from "lodash";
import MovieTable from "./MovieTable";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import Alert from "./common/Alert";
import SearchBox from "./common/SearchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {},
    sortColumn: { path: "title", order: "asc" },
    search: ""
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = movie => {
    const allMovies = [...this.state.movies];
    const movies = allMovies.filter(m => {
      return m._id !== movie._id;
    });
    deleteMovie(movie._id);
    this.setState({ movies });
  };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1, search: "" });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = ({ currentTarget }) => {
    const search = currentTarget.value;
    this.setState({ search: search, currentPage: 1, selectedGenre: "" });
  };

  componentDidMount() {
    const movies = getMovies();
    const genres = [{ name: "All genres" }, ...getGenres()];

    if (!movies || !genres) return;

    this.setState({ movies, genres });
  }

  getPageData = () => {
    const {
      movies,
      currentPage,
      pageSize,
      selectedGenre,
      sortColumn,
      search
    } = this.state;

    let filtered = [];
    if (search.trim().length > 0) {
      filtered = movies.filter(movie => {
        return movie.title.toLowerCase().startsWith(search.toLowerCase());
      });
    } else {
      filtered = !selectedGenre._id
        ? movies
        : movies.filter(movie => {
            return movie.genre._id === selectedGenre._id;
          });
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const renderMovies = paginate(sorted, pageSize, currentPage);
    return { totalCount: filtered.length, renderMovies };
  };

  render() {
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
      search
    } = this.state;
    const { totalCount, renderMovies } = this.getPageData();

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <Alert message={`Showing ${totalCount} movies`} />
            <Link className="btn btn-success mb-2" to="/movies/new">
              New
            </Link>
            <SearchBox value={search} onChange={this.handleSearch} />
            <MovieTable
              movies={renderMovies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
