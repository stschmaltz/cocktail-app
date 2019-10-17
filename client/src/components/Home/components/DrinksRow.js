import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import DrinkCard from "../../common/Cards/DrinkCard";
import "./DrinksRow.scss";
import HorizontalScroll from "react-scroll-horizontal";

// const toSnakeCase = function(string) {
//   var s;
//   s = string.replace(/[^\w\s]/g, "");
//   s = s.replace(/\s+|\d/g, " ");
//   s = s.replace(/\d/g,'');
//   return s
//     .toLowerCase()
//     .split(" ")
//     .join("_");
// };

const DrinksRow = ({ query, title, queryName }) => {
  const { loading, error, data } = useQuery(query);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="drinks-section">
      <div className="drinks-header">
        <div className="drinks-header-line line-a"></div>
        <h1 className="drinks-title">{title}</h1>
        <div className="drinks-header-line line-b"></div>
      </div>
      <div className="drinks-row">
        {data[queryName].slice(0, 10).map(drink => {
          return (
            <a
              key={drink.idDrink}
              className="drink-link"
              href={"/drink/" + drink.idDrink}
            >
              <DrinkCard drink={drink} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

DrinksRow.propTypes = {};

export default DrinksRow;
