//store the products array in localstorage as "products"

function Products(i, t, d, p) {
    this.image = i;
    this.type = t;
    this.desc = d;
    this.price = p;

}
let add = document.getElementById("add_product");

let datas = JSON.parse(localStorage.getItem("products")) || []

add.addEventListener("click", function () {
    event.preventDefault();

    let form = document.querySelector("#products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value

    let data = new Products(image, type, desc, price)
    datas.push(data);

    localStorage.setItem("products", JSON.stringify(datas))
    window.location.reload()
})

