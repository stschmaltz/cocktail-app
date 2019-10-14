import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import {
  GET_RECENT_DRINKS,
  GET_POPULAR_DRINKS,
  GET_RANDOM_DRINKS
} from "../Queries/drinks";
import RecentDrinks from "./RecentDrinks";
import RandomDrinks from "./RandomDrinks";
import PopularDrinks from "./PopularDrinks";

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>Popular Drinks</h1>
        <PopularDrinks></PopularDrinks>
      </div>
      <div>
        <h1>Random Drinks</h1>

        <RandomDrinks></RandomDrinks>
      </div>
      <div>
        <h1>Recently Added Drinks</h1>

        <RecentDrinks></RecentDrinks>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
