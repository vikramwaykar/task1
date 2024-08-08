// Search.jsx
import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="location">
        <label>Location/Property</label>
        <input type="text" placeholder="Where To?" />
      </div>
      <div className="checkin">
        <label>Check-in</label>
        <input type="date" />
      </div>
      <div className="checkout">
        <label>Check-out</label>
        <input type="date" />
      </div>
      <div className="guests">
        <label>Guests</label>
        <input type="text" value="2 Guests, 1+ Rooms" readOnly />
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default Search;
