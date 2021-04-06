import axios from "axios";
const API_KEY = "31075187f6e4dd78b16b9086853f8ba5";
const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.baseURL = BASE_URL;

const fetchMovies = (query, page) => {
  const url = `search/movie?q=${query}&page=${page}&key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    return data;
  });
};

const fetchMovieDetails = (movieId) => {
  const url = `movie/${movieId}?&language=en-US&api_key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

const fetchMovieCredits = (movieId) => {
  const url = `movie/${movieId}/credits?&language=en-US&api_key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

const fetchMovieReviews = (movieId) => {
  const url = `movie/${movieId}/reviews?&language=en-US&api_key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    return data;
  });
};

const fetchTrending = () => {
  const url = `trending/movie/day?api_key=${API_KEY}`;
  return axios.get(url).then(({ data }) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    console.log(data.results);
    return data.results;
  });
};

export {
  fetchMovies,
  fetchMovieDetails,
  fetchTrending,
  fetchMovieCredits,
  fetchMovieReviews,
};
