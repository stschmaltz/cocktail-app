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
export const GET_DRINK_BY_ID = gql`
  query GET_DRINK_BY_ID($id: Int!) {
    getDrinkById(id: $id) {
      idDrink
      strDrink
      strInstructions
      strCategory
      strDrinkThumb
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
      strDrinkThumb
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
      strDrinkThumb
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
      strDrinkThumb
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
