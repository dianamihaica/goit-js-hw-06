var categoriesList = document.getElementById('categories');

// Obține toate elementele li.item din lista
var categories = categoriesList.querySelectorAll('li.item');

// Afișează numărul total de categorii
console.log('Number of categories:', categories.length);

// Iterează prin fiecare categorie și afișează informațiile
categories.forEach(function(category) {
  // Obține titlul categoriei (tag-ul <h2>)
  var categoryName = category.querySelector('h2').textContent;

  // Obține toate elementele <li> din categoria curentă
  var categoryElements = category.querySelectorAll('ul li');

  // Afișează informațiile în consolă
  console.log('\nCategory:', categoryName);
  console.log('Elements:', categoryElements.length);
});