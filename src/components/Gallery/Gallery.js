import { Component } from "react";
import { Link } from "react-router-dom";

class Gallery extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Gallery;
