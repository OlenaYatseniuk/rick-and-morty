import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
// import { useSearchParams } from 'react-router-dom';
import s from './SearchBar.module.scss';

function Searchbar() {
//   const [search, setSearch] = useSearchParams();
  const [query, setQuery] = useState('');

  const handleChangeInput = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmitForm = event => {
      event.preventDefault();
      console.log(query)
    // if (query.trim()) {
    //   setSearchParams({ query });
    // }
  };

  return (
    // <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmitForm}>
        <FaSistrix
          style={{
            fill: 'rgba(0, 0, 0, 0.54)',
            cursor: 'pointer',
            padding: '2px',
                  width: '55px',
            height:'24px'
          }}
          onClick={handleSubmitForm}
        />

        <input
          className={s.searchForm__input}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Filter by name..."
          onChange={handleChangeInput}
        />
      </form>
    // </header>
  );
}

export default Searchbar;