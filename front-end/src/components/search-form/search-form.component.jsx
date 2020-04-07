import React, { useState } from 'react';
import './search-form.styles.css';

const SearchForm = () => {
  const [search, setSearch] = useState('');

  return (
    <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group mx-sm-2">
        <input type="text" className="form-control" placeholder="Search..."
          value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-light">Search</button>
    </form>
  );
}

export default SearchForm;