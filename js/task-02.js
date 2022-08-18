const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  ];
  console.log(ingredients)




const list = document.querySelector('#ingredients');


const newIngredient = ingredients.map(ingredient => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  // console.log(liElem);
  liElem.classList.add('item');
  return liElem;
});

list.append(...newIngredient);
console.log(list)


// elem.classList.add(cls)

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.