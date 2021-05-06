import { Component } from "react";
import Searchbar from "../../components/Searchbar";
import { fetchMovies } from "../../services/fetch.js";
import Gallery from "../../components/Gallery";
import queryString from "query-string";

const getQueryFromProps = (props) =>
  queryString.parse(props.location.search).query;

class Movies extends Component {
  state = { gallery: [] };

  componentDidMount() {
    const nextQuery = getQueryFromProps(this.props);
    this.handleNewQuery(nextQuery);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = getQueryFromProps(prevProps);
    const nextQuery = getQueryFromProps(this.props);

    if (prevQuery !== nextQuery) {
      this.handleNewQuery(nextQuery);
    }
  }

  handleNewQuery = (query) => {
    this.setState({ gallery: [] });
    if (query) {
      fetchMovies(query).then((movies) => {
        this.setState({ gallery: movies });
      });
    }
  };

  onQueryChange = ({ query }) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onQueryChange} />
        {this.state.gallery.length > 0 && (
          <Gallery movies={this.state.gallery} />
        )}
      </>
    );
  }
}

export default Movies;
