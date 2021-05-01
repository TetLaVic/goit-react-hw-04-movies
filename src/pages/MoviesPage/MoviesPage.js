import { Component } from "react";
import Searchbar from "../../components/Searchbar";
import { fetchMovies } from "../../services/fetch.js";
import Gallery from "../../components/Gallery";

class Movies extends Component {
  state = { query: "", gallery: [] };

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
        {this.state.gallery && <Gallery movies={this.state.gallery} />}
      </>
    );
  }
}

export default Movies;
