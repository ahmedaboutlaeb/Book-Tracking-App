import React, { useState } from "react";

import PropTypes from "prop-types";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";



const SearchBook = (props) => {



  SearchBook.propTypes = {
    storedBooks: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired,
  };
  let {storedBooks,onUpdateShelf} = props;
  let [query, setQuery] = useState("");
  let [searchedBooks,setsearchedBooks] = useState([]);
  
  const updateQuery = (query) => {
    setQuery(query);
    BooksAPI.search(query).then((searchResults) => { 
      if(query==='' || searchResults.items==0) setsearchedBooks([]);
      if (searchResults && searchResults.length > 0) {
        for (let i = 0; i < searchResults.length; i++) {
          for (let j = 0; j < storedBooks.length; j++) {
            if (searchResults[i].id === storedBooks[j].id) {
              let shelvedBookIndex = storedBooks.findIndex((book) => book.id === searchResults[i].id)
              searchResults[i].shelf = storedBooks[shelvedBookIndex].shelf;
              
            }
          }   
        }
        
    setsearchedBooks(searchResults)
   
    
    
    
    
      }
    });
  };
  

const changeHandler = (event) => updateQuery(event.target.value)
  
const notFound = <h1 style={{color:'grey'}}>No Match Found</h1>;

const found = searchedBooks.map((book) => (
    <Book
      key = {book.id}
      onUpdateShelf = {onUpdateShelf}
      bookItem = {book}
    />
))

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
            onChange={changeHandler}
          />
        </div> 
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks && searchedBooks.length > 0 ? found : notFound}
        </ol>
      </div>
    </div>
  );
};
export default SearchBook;
