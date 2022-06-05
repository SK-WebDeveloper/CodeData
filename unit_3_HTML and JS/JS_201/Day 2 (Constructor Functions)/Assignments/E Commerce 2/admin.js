function Products(i, n, c, p, g) {

    this.image = i;
    this.name = n;
    this.category = c;
    this.price = p;
    this.gender = g;

}

function storeData(event) {

    event.preventDefault();

    let form = document.querySelector("form");
    let image = form.image.value;
    let name = form.name.value;
    let category = form.category.value;
    let price = form.price.value;
    let gender = form.gender.value;

    let p = new Products(image, name, category, price, gender)

    data.push(p)

    localStorage.setItem('Products', JSON.stringify(data))

    window.location.href = 'products.html';
}
let data = JSON.parse(localStorage.getItem('Products')) || [] ;