import React, { Component } from "react";
import Table from "./common/Table";
import Like from "./common/Like";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
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
    const { movies, onLike } = this.props;
    return <Table columns={this.columns} data={movies} onLike={onLike} />;
  }
}

export default MovieTable;
