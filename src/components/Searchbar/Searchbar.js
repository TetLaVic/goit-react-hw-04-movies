import { Component } from "react";
import styles from "./Searchbar.module.css";
// import PropTypes from "prop-types";

class Searchbar extends Component {
  state = { query: "" };

  reset = () => {
    this.setState({ query: "" });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { value } = event.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={styles.SearchFormButton}
            onClick={this.handleSubmit}
          >
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;
