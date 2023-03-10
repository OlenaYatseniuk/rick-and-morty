import { useSearchParams } from "react-router-dom";

import { FaSistrix } from "react-icons/fa";
import s from "./SearchBar.module.scss";

function Searchbar({ filter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setSearchParams({ query: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmitForm}>
      <FaSistrix
        style={{
          fill: "rgba(0, 0, 0, 0.54)",
          cursor: "pointer",
          padding: "2px",
          width: "55px",
          height: "24px",
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
  );
}

export default Searchbar;
