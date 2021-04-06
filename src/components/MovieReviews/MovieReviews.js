import { Component } from "react";
import { fetchMovieReviews } from "../../services/fetch.js";

class MovieReviews extends Component {
  state = { movieReviews: null };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.setState({ movieReviews: null });
    fetchMovieReviews(movieId).then((movieReviews) => {
      this.setState({ movieReviews });
    });
  }

  render() {
    return this.state.movieReviews ? (
      <>
        <h4>Movie Reviews</h4>
        <ul>
          {this.state.movieReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    ) : (
      false
    );
  }
}

export default MovieReviews;
