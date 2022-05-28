
function Student(i, n, b, u, c) {

    this.image = i;
    this.name = n;
    this.batch = b;
    this.unit = u;
    this.course = c;

}

function storeData(event) {

    event.preventDefault();
    let form = document.getElementById("student_data");
    let image = form.image.value;
    let name = form.name.value;
    let batch = form.batch.value;
    let unit = form.unit.value;
    let course = form.course.value;

    let s1 = new Student(image, name, batch, unit, course)

    data.push(s1)
    localStorage.setItem('student', JSON.stringify(data))

    window.location.reload();
}
let data = JSON.parse(localStorage.getItem('student')) || []

let web_18 = 0;
let web_19 = 0;
let web_20 = 0;

data.forEach(function (el) {
    if (el.batch == "FT WEB-18") {
        web_18++;
    }
    else if (el.batch == "FT WEB-19") {
        web_19++
    }
    else if (el.batch == "FT WEB-20") {
        web_20++
    }


})

document.querySelector("#web18").innerText = "WEB-18 : " + web_18;
document.querySelector("#web19").innerText = "| WEB-19 : " + web_19;
document.querySelector("#web20").innerText = "| WEB-20 : " + web_20;
