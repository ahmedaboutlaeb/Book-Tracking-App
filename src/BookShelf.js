import React from "react";
import Book from './Book';
import PropTypes from 'prop-types';


const BookShelf = (props)=>{

    BookShelf.propTypes={
        title:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired,
        updateShelf:PropTypes.func.isRequired
    }
    const {books,title,updateShelf} = props
    return( 
        
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book)=>
                    <Book 
                    key={book.id}
                    onUpdateShelf={updateShelf}
                    bookItem={book}
                    />
                    )}
                </ol>
            </div>
            
        </div>
    );

}
export default BookShelf;