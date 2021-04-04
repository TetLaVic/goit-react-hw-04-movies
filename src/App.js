import "./App.css";
import { Component } from "react";
import { fetchTrending } from "./services/fetch";
import Gallery from "./components/Home/Gallery";

class App extends Component {
  state = { query: "", page: 1, gallery: [] };

  componentDidMount = () => {
    this.setState({ gallery: [] });
    fetchTrending().then((movies) => {
      this.setState({ gallery: [...movies] });
    });
  };

  render() {
    return <Gallery movies={this.state.gallery} />;
  }
}

export default App;
