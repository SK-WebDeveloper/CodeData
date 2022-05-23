
function Product(name,brand,price){
    this.name = name;
    this.brand = brand;
    this.price = price;
}

let arr = []

function submitProd(e){
    e.preventDefault();

    let form = document.getElementById("product");
    let name = form.name.value;
    let brand = form.brand.value;
    let price = form.price.value;

    let p = new product(name,brand,price)
    arr.push(p)
    console.log(arr)
}

