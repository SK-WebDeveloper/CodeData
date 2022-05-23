
let data = JSON.parse(localStorage.getItem('products')) || [];

let allproducts = document.getElementById("all_products")

data.forEach(function (el, i) {

    let div = document.createElement("div");

    let type = document.createElement("p");
    type.innerText = el.type;

    let desc = document.createElement("p")
    desc.innerText = el.desc;

    let price = document.createElement("p")
    price.innerText = el.price;

    let image = document.createElement("img")
    image.src = el.image

    let button = document.createElement("button")
    button.setAttribute("id", "remove_product")
    button.innerText = "Remove Product"
    button.addEventListener('click', function () {
        data.splice(i, 1);
        localStorage.setItem('products', JSON.stringify(data));
        window.location.reload()
    })
    div.append(image, type, desc, price, button)
    allproducts.append(div)
})
