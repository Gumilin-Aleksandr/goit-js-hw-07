`use strict`;

const categoriesItems = document.querySelectorAll('.item');

console.log('Number of categories: ' + categoriesItems.length);

for (const item of categoriesItems) {
  const title = item.querySelector('h2').textContent;
  const amount = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${amount}`);
}
