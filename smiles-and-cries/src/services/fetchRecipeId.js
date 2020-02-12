export const getRecipeById = id => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://fathomless-meadow-03057.herokuapp.com/api/v1/recipes/${id}`,
    {
      headers: {
        origin: null
      }
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
