import React from "react";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi-browser";
import Form from "./common/Form";
import { saveMovie, getMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    genres: [],
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.any(),
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number()
      .min(0)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
  };

  componentDidMount() {
    const genres = getGenres();
    const movieId = this.props.match.params.id;
    const movie = getMovie(movieId);
    if (movie) {
      this.setState({ data: this.mapToViewModel(movie) });
    } else this.props.history.replace("/not-found");

    this.setState({ genres });
  }

  mapToViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };

  doSubmit = () => {
    const result = saveMovie(this.state.data);
    if (result) {
      console.log("Saved");
    } else {
      console.log("Failed");
    }
    this.props.history.push("/movies");
  };
  render() {
    const { genres } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("title", "Title")}
          {this.renderSelect(
            "genreId",
            "Genre",
            genres,
            this.state.data.genreId
          )}
          {this.renderInput("numberInStock", "Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderSubmit("Submit")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
