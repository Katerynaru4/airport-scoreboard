import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../flights.utils';

const SearchField = () => {
  const query = useQuery();
  const [value, setValue] = useState(query.get('search') || '');
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    history.push(`?search=${value}`);
  };

  return (
    <div className="search-form">
      <form
        className="search-form__form"
        onSubmit={(event) => onSubmitForm(event)}
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
