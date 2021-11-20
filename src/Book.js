import React from "react";
import BookShelfChanger from './BookShelfChanger';

const Book = (props)=>{
    const {bookItem,onUpdateShelf} = props;
 
    return(
        <li>

        
            <div className="book">
               <div className="book-top">
                    <div className="book-cover" 
                    style={{ width: 128, height: 192, 
                        backgroundImage:((bookItem.imageLinks && bookItem.imageLinks.smallThumbnail) ?
                        `url(${bookItem.imageLinks.smallThumbnail})`:"none")
                          }}></div>
                    <BookShelfChanger
                    onUpdateShelf={onUpdateShelf}
                    shelf={bookItem.shelf}
                    bookItem={bookItem}
                    />
                </div>
                <div className="book-title">{bookItem.title}</div>
                <div className="book-authors">{(bookItem.author && bookItem.authors.length > 1 ?
                bookItem.authors.join(", ") : bookItem.authors)}
                </div>
            </div>
        
        </li>
    )
}
export default Book;