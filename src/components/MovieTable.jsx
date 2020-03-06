import React, { Component } from "react";
import Table from "./common/Table";
import Like from "./common/Like";
import { Link } from "react-router-dom";

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => {
        return <Link to={"/movies/" + movie._id}>{movie.title}</Link>;
      }
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: movie => (
        <Like
          onLike={() => {
            this.props.onLike(movie);
          }}
          liked={movie.liked}
        />
      )
    },
    {
      content: movie => {
        return (
          <div
            className="btn btn-danger"
            onClick={() => {
              this.props.onDelete(movie);
            }}
          >
            Delete
          </div>
        );
      }
    }
  ];
  render() {
    const { movies, sortColumn, onLike, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onLike={onLike}
        onSort={onSort}
      />
    );
  }
}

export default MovieTable;
