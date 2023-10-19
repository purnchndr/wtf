import { useState } from "react";
import style from "./SearchBox.module.css";
import Button from "../common/Button";
function SearchBox() {
  const [value, setValue] = useState("");

  function handelInputValue(e) {
    setValue(e.target.value);
  }

  function handelSearchForm(e) {
    e.preventDefault();
    console.log("Submitted ,,,,", value);
  }
  return (
    <div className={style.searchBox}>
      <form className={style.form} onSubmit={handelSearchForm}>
        <input
          className={style.input}
          type="text"
          value={value}
          onChange={handelInputValue}
          placeholder="Search Here"
        />
        <Button>Search</Button>
      </form>
    </div>
  );
}

export default SearchBox;
