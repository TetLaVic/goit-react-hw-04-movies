import { Component } from "react";
import { fetchMovieDetails } from "../../services/fetch";
// import PropTypes from "prop-types";

class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ movie: null });
    fetchMovieDetails(movieId).then((movieDetails) => {
      this.setState({ movie: movieDetails });
      console.log(movieDetails);
    });
  }

  render() {
    // const {
    //   poster_path,
    //   vote_average,
    //   overview,
    //   genres,
    //   title,
    // } = this.state.movie;
    return (
      <>
        {this.state.movie ? (
          <>
            <img
              src={
                this.state.movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`
                  : "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
              }
              alt=""
            />
            {/* <h1>Movie Details Page {this.props.match.params.movieId}</h1> */}
            <h2>
              {this.state.movie.title ? this.state.movie.title : "No title"}
            </h2>
            <span>User score: {this.state.movie.vote_average}</span>
            <h3>Overview</h3>
            <span>{this.state.movie.overview}</span>
            <h4>Genres</h4>
            <ul>
              {this.state.movie.genres.map((genre) => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </>
        ) : (
          false
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
