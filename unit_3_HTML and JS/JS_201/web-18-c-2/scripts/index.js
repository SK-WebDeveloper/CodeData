// Add the coffee to local storage with key "coffee"


let add = document.getElementById('add_to_bucket')

let datas = JSON.parse(localStorage.getItem('coffee')) || []

const url = 'https://masai-mock-api.herokuapp.com/coffee/menu';

async function getData() {

    try {
        let res = await fetch(url)

        let data = await res.json()

        display(data.menu.data)

    } catch (error) {
        console.log(error)
    }
}
getData()
function display(data) {

    var count = datas.length;
    var c_no = document.getElementById("coffee_count");
    c_no.innerText = count;

    data.forEach(function (el) {

        let menu = document.getElementById('menu')

        let div = document.createElement('div');
        div.setAttribute('id', 'div')
        let img = document.createElement('img');
        img.setAttribute('id', 'img')
        img.src = el.image;

        let title = document.createElement('p');
        title.setAttribute('id', 'title')
        title.innerText = el.title;

        let price = document.createElement('p');
        price.innerText = el.price;
        price.setAttribute('id', 'price')

        let button = document.createElement('button');
        button.setAttribute('id', 'add_to_bucket')
        button.innerText = 'Add To Bucket';
        button.addEventListener('click', function () {
            datas.push(el)
            localStorage.setItem("coffee", JSON.stringify(datas));
            window.location.reload()
            
        })
        div.append(img, title, price, button)
        menu.append(div)
    })

}



