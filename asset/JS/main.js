var ingredEl = document.querySelector("#ingredients");
// INSERISCO I VARI INGREDIENTEI IN UNA MATRICE
var list = [
    ['Cheese', '1'],
    ['Tomato', '0.5'],
    ['Egg', '1.5'],
    ['Lettuce', '1'],
    ['Mustard', '0.5'],
    ['Ketchup', '0.5'],
];


var i = 0;
while (i < list.length) {
    ingredEl.innerHTML +=
        `
    <li class="list-none half_flex-basis">
        <img class="food-emoticon" src="./asset/img/"${list[i][0]}".svg">
        <label class="mx-1" for="${list[i][0]}">${list[i][0]}</label>
        <input type="checkbox" data-price="${list[i][1]}" id="${list[0]}">
        <span class="ml-05">Add</span>
    </li>
    
    `;

    i++
};

