var ingredEl = document.querySelector("#ingredients");
var calcPriceEl = document.getElementById('calc_price');
var discountEl = document.getElementById('discount');
// INSERISCO I VARI INGREDIENTEI IN UNA MATRICE
var list = [
    ['Cheese', '1'],
    ['Tomato', '0.5'],
    ['Egg', '1.5'],
    ['Lettuce', '1'],
    ['Mustard', '0.5'],
    ['Ketchup', '1']
];


var i = 0;
while (i < list.length) {
    ingredEl.innerHTML +=
        `
    <li class="list-none half_flex-basis">
        <img class="food-emoticon" src="./asset/img/"${list[i][0]}".svg">
        <label class="mx-1" for="${list[i][0]}">${list[i][0]}</label>
        <input type="checkbox" data-price="${list[i][1]}" id="${list[i][0]}">
        <span class="ml-05">Add</span>
    </li>
    
    `;

    i++
};

// CREO UNA FUNZIONE PER VERIFICARE SE I CHECKBOX SONO FLEGGATI 
function isChecked(element) {
    if (element.checked) {
        return true;
    } else {
        return false;
    }

}

// CREO UN CICLO 
calcPriceEl.addEventListener('click', function () {

    var price;
    var basicPrice = 4.99;
    var average_20 = 0.2;
    var average_40 = 0.4;
    var averageDiscount;
    var j = 0;
    var additionPrice = 0;
    while (j < list.length) {
        var x = document.getElementById(list[j][0]);
        if (isChecked(x)) {
            additionPrice += Number(x.getAttribute('data-price'));
            console.log(additionPrice);
        }

        j++
    }

    // VERIFICO SE CI SONO COUPON VALIDI 

    if (discountEl.value == "") {
        price = (basicPrice + additionPrice);

    } else if (discountEl.value == "AA123") {
        averageDiscount = average_20;
        price = (basicPrice + additionPrice) * (1 - averageDiscount);

    } else if (discountEl.value == "AK349") {
        averageDiscount = average_40;
        price = (basicPrice + additionPrice) * (1 - averageDiscount);
    } else {
        alert('ERROR');
    }
    console.log(price);

});
