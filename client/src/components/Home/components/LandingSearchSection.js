import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LandingSearchSection.scss";
import Autosuggest from "react-autosuggest";

const LandingSearchSection = props => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const inputProps = {
    placeholder: "Search for cocktail by name",
    value,
    onChange: (event, { newValue }) => setValue(newValue)
  };

  return (
    <div className="landing-search-container">
      <div className="content-container">
        <h1 className="landing-header">Find a Cocktail</h1>
        <Autosuggest
          className="landing-search-bar"
          suggestions={suggestions}
          // onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          // onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          // getSuggestionValue={getSuggestionValue}
          // renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    </div>
  );
};

LandingSearchSection.propTypes = {};

export default LandingSearchSection;
