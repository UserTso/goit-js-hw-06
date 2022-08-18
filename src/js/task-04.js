

let counterValue = 0;
console.log(counterValue);


const propCounterDecrement = document.querySelector('button[data-action="decrement"');
const propSpan = document.querySelector('#value');
const propCounterIncrement = document.querySelector('button[data-action="increment"]');


propCounterDecrement.addEventListener('click', hendleTargetButtonClick);
    
function hendleTargetButtonClick() {

    counterValue -= 1;
    propSpan.textContent = counterValue;
    console.log(propSpan);
};

propCounterIncrement.addEventListener('click', hendleTargetButtonClick1);

function hendleTargetButtonClick1() {

    counterValue += 1;
    propSpan.textContent = counterValue;
    console.log(propSpan);
};



// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.