import { Component } from "react";
import { fetchTrending } from "../../services/fetch";
import Gallery from "../../components/Gallery";
// import Header from "../../components/Header";

class Home extends Component {
  state = { gallery: [] };

  componentDidMount = () => {
    this.setState({ gallery: [] });
    fetchTrending().then((movies) => {
      this.setState({ gallery: [...movies] });
    });
  };

  render() {
    console.log(this.props.match.url);
    return (
      <>
        <h2>Trending today</h2>
        <Gallery movies={this.state.gallery} />
      </>
    );
  }
}

export default Home;