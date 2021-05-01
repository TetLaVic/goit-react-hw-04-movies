import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Gallery.module.css";
import PropTypes from "prop-types";

class Gallery extends Component {
  render() {
    const { movies, location } = this.props;
    console.log("location", location, "props", this.props);
    return (
      <>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id} className={styles.GalleryItem}>
              <Link
                className={styles.Link}
                to={{ pathname: `/movies/${id}`, state: { from: location } }}
              >
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
  movies: PropTypes.array,
};

export default withRouter(Gallery);
