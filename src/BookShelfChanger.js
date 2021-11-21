import React from "react";
import PropTypes from 'prop-types';


const BookShelfChanger = (props) => {
  BookShelfChanger.propTypes = {
    onUpdateShelf:PropTypes.func.isRequired,
    bookItem:PropTypes.object.isRequired
  }
  const {onUpdateShelf,bookItem} = props;

  return (
    <div className="book-shelf-changer">
      <select onChange={(event)=> onUpdateShelf(bookItem, event.target.value)} value = {(bookItem.shelf ? bookItem.shelf:"none")}>

        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        
      </select>
    </div>
  );
};
export default BookShelfChanger ;
