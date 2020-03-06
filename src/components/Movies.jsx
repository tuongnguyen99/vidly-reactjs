import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import MovieTable from "./MovieTable";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {},
    sortColumn: { path: "title", order: "asc" }
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
    this.setState({ movies });
  };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
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
      sortColumn
    } = this.state;
    const filtered = !selectedGenre._id
      ? movies
      : movies.filter(movie => {
          return movie.genre._id === selectedGenre._id;
        });
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
      sortColumn
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
