import {
  CHANGE_SEARCH_CATEGORY,
  CHANGE_SEARCH_SORTING,
  CHANGE_SEARCH_STRING,
  REQUEST_BOOK,
  REQUEST_BOOKS,
  SEARCHING_BOOKS_IN_PROGRESS,
  SET_BOOK,
  SET_BOOKS,
  SET_ERROR,
  SET_MORE_BOOKS,
} from '../actionTypes';

export const changeSearchString = (searchString) => ({
  type: CHANGE_SEARCH_STRING,
  payload: searchString,
});

export const requestBooks = (bookTitle) => ({
  type: REQUEST_BOOKS,
  payload: bookTitle,
});

export const setBooks = (books) => ({
  type: SET_BOOKS,
  payload: books,
});

export const setMoreBooks = (books) => ({
  type: SET_MORE_BOOKS,
  payload: books,
});

export const toggleSearchingInProgress = (isSearchingInProgress) => ({
  type: SEARCHING_BOOKS_IN_PROGRESS,
  payload: isSearchingInProgress,
});

export const requestBook = (id) => ({
  type: REQUEST_BOOK,
  payload: id,
});

export const setBook = (book) => ({
  type: SET_BOOK,
  payload: book,
});

export const changeSearchSorting = (value) => ({
  type: CHANGE_SEARCH_SORTING,
  payload: value,
});

export const changeSearchCategory = (value) => ({
  type: CHANGE_SEARCH_CATEGORY,
  payload: value,
});

export const setError = (errorMessage) => ({
  type: SET_ERROR,
  payload: errorMessage,
});
