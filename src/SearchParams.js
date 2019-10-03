import React from "react";
const location = "Seattle, WA";

const SearchParams = () => {
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input id="location" value={location} placeholder="location value" />
        </label>
        <button> Submit </button>
      </form>
    </div>
  );
};
