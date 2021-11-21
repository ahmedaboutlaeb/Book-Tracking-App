import React from "react";
import { Link } from "react-router-dom";


const AddBook = _ => {
  return (
    
      <div className="open-search">
        <Link to="/search" className="">
          <button className="open-search button"></button>
        </Link>
      </div>
    
  );
};

export default AddBook;
