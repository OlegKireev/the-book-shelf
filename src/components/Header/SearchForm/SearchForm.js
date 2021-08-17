import React, { useState } from 'react';
import classes from './SearchForm.module.scss';
import { connect } from 'react-redux';
import { getBooks } from './../../../store/thunks/search';

const SearchForm = ({ getBooks }) => {
  const [searchValue, setSearchValue] = useState('');
  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    getBooks(searchValue);
  };

  return (
    <form className={classes.SearchForm} onSubmit={onFormSubmit}>
      <label>
        Title
        <input
          value={searchValue}
          onChange={onSearchInputChange}
          type="search"
          placeholder="Alice's Adventures in Wonderland"
        />
      </label>
      {/* <div>
        <label>
          Category
          <select>
            <option selected>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </select>
        </label>

        <label>
          Sorting
          <select>
            <option selected>relevance </option>
            <option>newest</option>
          </select>
        </label>
      </div> */}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.search.books,
  };
};

export default connect(mapStateToProps, { getBooks })(SearchForm);
