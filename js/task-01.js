const numberUlCategoties = document.querySelectorAll('#categories> li.item').length;
console.log(`Number of categories: ${numberUlCategoties}`);
const ulRef = document.querySelector('#categories').children;
for (let elem of ulRef) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${quantityElem}`);
}
