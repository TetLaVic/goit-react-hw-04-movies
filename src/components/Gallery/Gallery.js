import { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import PropTypes from "prop-types";

class Gallery extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id} className={styles.GalleryItem}>
              <Link className={styles.Link} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Gallery.propTypes = {
  movies: PropTypes.object,
};

export default Gallery;
