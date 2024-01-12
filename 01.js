var categoriesList = document.getElementById('categories');
var categories = categoriesList.querySelectorAll('li.item');
console.log('Number of categories:', categories.length);
categories.forEach(function(category) {
  var categoryName = category.querySelector('h2').textContent;
  var categoryElements = category.querySelectorAll('ul li');
  console.log('\nCategory:', categoryName);
  console.log('Elements:', categoryElements.length);
});