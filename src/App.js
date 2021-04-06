import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
// import { fetchTrending } from "./services/fetch";
// import Gallery from "./components/Home/Gallery";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";

// class App extends Component {
//   state = { query: "", page: 1, gallery: [] };

//   componentDidMount = () => {
//     this.setState({ gallery: [] });
//     fetchTrending().then((movies) => {
//       this.setState({ gallery: [...movies] });
//     });
//   };
//   // return <Gallery movies={this.state.gallery} />;
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/movies" component={Movies} />
//         <Route path="/movieDetails" component={MovieDetails} />
//       </Switch>
//     );
//   }
// }

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
