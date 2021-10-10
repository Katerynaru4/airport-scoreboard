import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../flights.utils';


const SearchField = () => {
  const query = useQuery();
  const [value, setValue] = useState(query.get('search') || '');
  const history = useHistory();
  return (
    <div className="flights__search-from search-form">
      <form
        className="search-form__form"
        onSubmit={(event) => {
          event.preventDefault();
          history.push(`?search=${value}`);
        }}
      >
        <i className="material-icons search-icon">search</i>
        <input
          className="search-form__input"
          type="text"
          placeholder="Airline, destination or flight #"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-form__submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
