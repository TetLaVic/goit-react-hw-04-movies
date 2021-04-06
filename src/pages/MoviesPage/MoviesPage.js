import { Component } from "react";
import Searchbar from "../../components/Searchbar";
import { fetchMovies } from "../../services/fetch.js";
import Gallery from "../../components/Gallery";

class Movies extends Component {
  state = { query: "", movies: [] };

  handleNewQuery = ({ query }) => {
    this.setState({ gallery: [] });
    fetchMovies(query).then((movies) => {
      this.setState({ gallery: movies });
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleNewQuery} />
        {this.state.gallery ? <Gallery movies={this.state.gallery} /> : false}
      </>
    );
  }
}

export default Movies;
