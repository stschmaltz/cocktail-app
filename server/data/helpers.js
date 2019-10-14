
const extractIngredients = drink => {
  const res = [...Array(15)]
    .map((_, i) => {
      const ingredientString = `strIngredient${i + 1}`;
      const measureString = `strMeasure${i + 1}`;
      return drink[ingredientString]
        ? {
            name: drink[ingredientString],
            measure: drink[measureString]
          }
        : null;
    })
    .filter(ingredient => ingredient);
  drink.ingredients = res;
  drink.id = res.drinkId;
  return drink;
};

module.exports = {
  extractIngredients
};
