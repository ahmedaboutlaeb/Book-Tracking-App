import React from "react";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Title from "./Title";
import BookShelvs from "./BookShelvs";
import AddBook from "./AddBook";
import BookSearch from "./BookSearch";
import { Route } from "react-router-dom";
import "./App.css";


const BooksApp = () => {
  let [books, setBooks] = useState([]);
  let [flip, setFlip] = useState(true);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);
  

  const updateShelf = (book, shelf) => {
    const updateIndex = books.findIndex((bk) => bk.id === book.id); // get the index of the book
    const updatedBookList = books; //all books
    if (updateIndex === -1) {
      book.shelf = shelf;
      updatedBookList.push(book);
    } else {
      updatedBookList[updateIndex].shelf = shelf;
    }
    
    setBooks(updatedBookList);
    BooksAPI.update(book, shelf);
    setFlip(!flip);
  };

  return (
    <div className="app">
      <Route
        exact
        path="/search"
        render={() => (
          <BookSearch storedBooks={books} onUpdateShelf={updateShelf} />
        )}
      />

      <Route
        exact
        path="/"
        render={() => (
          <div className="list-books">

            <Title />

            <div className="list-books-content">
              <BookShelvs books={books} updateShelf={updateShelf} />
              <AddBook />
            </div>
            
          </div>
        )}
      />
    </div>
  );
};

export default BooksApp;
