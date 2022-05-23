
function Details(n, d, i, r) {
    this.name = n;
    this.date = d;
    this.poster = i;
    this.rating = r;
}

function storeData(event) {

    event.preventDefault();

    let form = document.getElementById("container")
    let name = form.name.value;
    let date = form.date.value;
    let poster = form.poster.value;
    let rating = form.rating.value;

    let s1 = new Details(name, date, poster, rating)
    let data = JSON.parse(localStorage.getItem('movies')) || [];
    data.push(s1)
    localStorage.setItem('movies', JSON.stringify(data))
    window.location.reload()
}