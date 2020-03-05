import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import MovieTable from "./MovieTable";
import Pagination from "./common/Pagination";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1
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

  componentDidMount() {
    const movies = getMovies();
    if (!movies) return;
    this.setState({ movies });
  }

  render() {
    const { movies, pageSize, currentPage } = this.state;
    return (
      <div>
        <MovieTable
          movies={movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
        />
        <Pagination
          itemsCount={movies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
