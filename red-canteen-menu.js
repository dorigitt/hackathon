function buttonEdit(event) {
    const clickedButton = event.target;

    if (clickedButton.textContent.trim() === 'Выбрать') {
        clickedButton.textContent = 'В КОРЗИНЕ';
    }
}

const buttons = document.querySelectorAll('.action');
buttons.forEach(button => {
    button.addEventListener('click', buttonEdit);
});

function buttonEdit(event) {
    const clickedButton = event.target;

    clickedButton.textContent =
        clickedButton.textContent.trim() === 'Выбрать' ? 'В КОРЗИНЕ' : 'Выбрать';
}

const buttons2 = document.querySelectorAll('.action');
buttons2.forEach(button => {
    button.addEventListener('click', buttonEdit);
});

let totalPrice = 0;

function addToTotal(price) {
    totalPrice += price;
    updateTotalDisplay();
}

function updateTotalDisplay() {
    const totalElement = document.getElementById('total');
    totalElement.textContent = totalPrice;
}

function clearTotal() {
    totalPrice = 0;
    updateTotalDisplay();
}
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearTotal);

function fillGaps() {
    if (document.getElementById('name').value === "") {
        alert("Input your name");
    } else if (document.getElementById('phone').value === "") {
        alert("Input your number");
    } else if (document.getElementById('car').value === "") {
        alert("Input the place");
    } else {
        alert("Success payment,Thank you for the purchase");
    }
}

const table = document.getElementById("price-button");
table.addEventListener('click', fillGaps);