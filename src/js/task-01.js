const listItem = document.querySelectorAll(".item");
console.log('Number of categories:', listItem.length);



listItem.forEach((elem) => {
    const listTitle = elem.querySelector("h2");
console.log('Category:', listTitle.textContent);

const listEl = elem.querySelectorAll("li");
console.log('Elements:', listEl.length);
} )




