const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();
ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  fragment.append(listItem);
});
ingredientsRef.append(fragment);
