import React from "react";
import PropTypes from 'prop-types';


import BookShelf from "./BookShelf";
const BookShelvs = (props) => {
  BookShelvs.propTypes={
    books:PropTypes.array.isRequired,
    updateShelf:PropTypes.func.isRequired
  }
  let {books,updateShelf} = props;
  

  return (
    <div>
      <BookShelf 
      className='bookshelf' 
      title="Currently Reading"
      books={books.filter((book)=>book.shelf === "currentlyReading")}
      updateShelf = {updateShelf}
      />


      <BookShelf 
      className='bookshelf' 
      title="Want To Read" 
      books={books.filter((book)=>book.shelf === "wantToRead")}
      updateShelf = {updateShelf}
      />
      


      <BookShelf 
      className='bookshelf' 
      title='read'
      books={books.filter((book)=>book.shelf === "read")}
      updateShelf = {updateShelf}
      />
      
    </div>
  );
};
export default BookShelvs;
