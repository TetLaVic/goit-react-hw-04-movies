import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { fetchMovieDetails } from "../../services/fetch";
import MovieCast from "../../components/MovieCast";
import MovieReviews from "../../components/MovieReviews";
import styles from "./MovieDetailsPage.module.css";
// import PropTypes from "prop-types";

class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ movie: null });
    fetchMovieDetails(movieId).then((movieDetails) => {
      this.setState({ movie: movieDetails });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    console.log(location, history);
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }

    // history.push("/");

    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push("/");
  };

  render() {
    return (
      <>
        <button
          className={styles.ButtonGoBack}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        {this.state.movie ? (
          <>
            <div className={styles.MovieCard}>
              <img
                className={styles.MovieImage}
                src={
                  this.state.movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`
                    : "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                }
                alt=""
              />
              <div className={styles.MovieDetails}>
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
              </div>
            </div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <NavLink
                  className={styles.Link}
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    state: this.props.location.state,
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={styles.Link}
                  to={{
                    pathname: `${this.props.match.url}/reviews`,
                    state: this.props.location.state,
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Route
              path={`${this.props.match.path}/cast`}
              component={MovieCast}
            />
            <Route
              path={`${this.props.match.path}/reviews`}
              component={MovieReviews}
            />
          </>
        ) : (
          false
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
