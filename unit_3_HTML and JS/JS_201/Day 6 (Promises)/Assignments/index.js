
let form = document.querySelector('form');

let i = 0;
let food = [];

form.addEventListener("submit", function (event) {
    container.innerHTML = null;
    event.preventDefault();

    let burger = form.burger.checked;
    food.push(burger);
    let pizza = form.pizza.checked;
    food.push(pizza);
    let hotdog = form.hotdog.checked;
    food.push(hotdog);
    let drink = form.chiller.checked;
    food.push(drink);

    let foodPromise = new Promise(function (resolve, reject) {

        let time = Math.random() * 70;
        i++;

        setTimeout(function () {
            if (burger || pizza || hotdog || drink) resolve();
            else reject();
        }, time);

    });

    foodPromise.then(function (value) {
        
        let container = document.getElementById('container');
        // container.innerHTML = null;

        let p = document.createElement('p');
        p.innerText = 'Order Id. #' + '1NODN111'+Math.floor(Math.random() * 100000);

        let img = document.createElement('img');

        let a = food[0];
        let b = food[1];
        let c = food[2];
        let d = food[3];

        if (a == true && b != true && c != true) img.src = 'https://c.tenor.com/lVkCTeqIyS8AAAAC/mcdonalds-big-mac.gif';
        else if(a == true && b == true && c != true) img.src = 'https://www.triumf-omsk.ru/upload/pizza_pic.jpg'
        else if(a == true && c == true && b != true) img.src = 'https://thumbor.thedailymeal.com/cHf_ZaOGOc5REp5l3f4_Tf-fLnY=/870x565/filters:focal(705x817:706x818)/https://www.thedailymeal.com/sites/default/files/story/2021/are-burgers-hot-dogs-sandwiches.jpg'
        else if (b == true && c != true && a != true) img.src = 'http://24.media.tumblr.com/4ad387c761829b20a4a46149058295aa/tumblr_mk2d5qEGsG1rfrb50o1_500.gif';
        else if (b == true && c == true && a != true) img.src = 'https://png.pngitem.com/pimgs/s/100-1005781_pizza-hot-dog-fast-food-food-sausage-pizza.png';
        else if (c == true && a != true && b != true) img.src = 'https://d2am1qai33sroc.cloudfront.net/image/5b23bab22800002b009b73d0?kptnkey=6q7QNKy-oIgk-IMuWisJ-jfN7s6';
        else if(d == true && a != true && b != true && c !=true) img.src = 'https://365thingsinhouston.com/wp-content/uploads/2021/08/Frozen-Drinks-at-McDonalds-Houston-Summer-2021.jpg';
        else if(d == true && a == true && b == true && c ==true) img.src = 'https://b.zmtcdn.com/data/pictures/chains/1/171/a1958577ef27f5fd85c9f2c57d50c54e.jpg';
        else img.src = 'https://goldbelly.imgix.net/uploads/card/image/926/TopChefMealKits-Homepage-Feature-Banner-Template-1.gif?ixlib=react-9.0.2&auto=format&ar=2%3A1';
        food = [];

        let card = document.createElement('div');
        card.append(p, img)
        container.append(card);

    }).catch(function (err) {
        let container = document.getElementById('container');

        let p = document.createElement('p');
        p.setAttribute('id', 'error');
        p.innerText = 'Ohho Select an Item......!';

        container.append(p);

        setTimeout(function () {
            container.innerHTML = null;
        }, 3000);

        food = [];

    })
})
