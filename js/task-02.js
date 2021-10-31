const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');
ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  ingredientsRef.append(listItem);
});
