import { Component } from "react";
import { Link } from "react-router-dom";
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
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`${this.props.match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
              </li>
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
