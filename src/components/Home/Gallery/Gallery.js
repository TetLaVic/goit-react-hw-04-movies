import { Component } from "react";

class Gallery extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Gallery;
