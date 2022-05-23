
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

    let data = JSON.parse(localStorage.getItem('student')) || []

    data.push(s1)
    localStorage.setItem('student', JSON.stringify(data))

    window.location.reload();
}