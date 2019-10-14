import gql from "graphql-tag";

export const GET_DRINK_BY_NAME = gql`
  query GET_DRINK_BY_NAME($name: String!) {
    getDrinkByName(name: $name) {
      idDrink
      strDrink
      strInstructions
      strCategory
      ingredients {
        name
        measure
      }
    }
  }
`;

export const GET_RECENT_DRINKS = gql`
  {
    recentDrinks {
      idDrink
      strDrink
      strInstructions
      strCategory
      ingredients {
        name
        measure
      }
    }
  }
`;

export const GET_POPULAR_DRINKS = gql`
  {
    popularDrinks {
      idDrink
      strDrink
      strInstructions
      strCategory
      ingredients {
        name
        measure
      }
    }
  }
`;

export const GET_RANDOM_DRINKS = gql`
  {
    randomDrinks {
      idDrink
      strDrink
      strInstructions
      strCategory
      ingredients {
        name
        measure
      }
    }
  }
`;
