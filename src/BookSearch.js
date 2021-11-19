import React, { useState } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BookAPI from "./BooksAPI";

const SearchBook = (props) => {
  SearchBook.propTypes = {
    storedBooks: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };

  let [query, setquery] = useState("");
  let searchedBooks = [];

  const updateQuery = (query) => {
    setquery(query);
    BookAPI.search(query).then((searchResults) => {
      if (searchResults && searchResults.length > 0) {
        for (let i = 0; i < searchResults; i++) {
          for (let j = 0; j < props.storedBooks; j++) {
            if (searchResults[i].id === props.storedBooks[j].id) {
              const shelvedBookIndex = props.storedBooks.findIndex(
                (book) => book.id === searchResults[i].id
              );
              searchResults[i].shelf =
                props.storedBooks[shelvedBookIndex].shelf;
            }
          }
        }
      }
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title or author"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.length > 0 &&
            searchedBooks.map((book) => (
              <Book
                key={book.id}
                onUpdateShelf={props.onUpdateShelf}
                bookItem={book}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchBook;
