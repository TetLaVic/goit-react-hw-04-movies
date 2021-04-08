import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import styles from "./components/Header/Header.module.css";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MoviesPage from "./pages/MoviesPage";
// import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() =>
  import("./pages/HomePage" /*WebpackChunkName: HomePage */)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /*WebpackChunkName: MoviesPage */)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /*WebpackChunkName: MovieDetailsPage */)
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Loader
            type="Hearts"
            color="red"
            height={80}
            width={80}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
