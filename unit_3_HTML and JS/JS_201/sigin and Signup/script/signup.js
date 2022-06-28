
function userData(n,s,m,e,u,p){
    this.name = n;
    this.surname = s;
    this.mobile = m;
    this.email = e;
    this.username = u;
    this.password = p;
}
let form = document.querySelector("#signup")
function SignupData(){
    let name = form.name.value
    let surname = form.surname.value
    let mobile = form.mobile.value
    let email = form.email.value
    let username = form.username.value
    let password = form.password.value

    let d1 = new userData(name,surname,mobile,email,username,password)

    let data = JSON.parse(localStorage.getItem('userData')) || []

    data.push(d1)
    localStorage.setItem('userData',JSON.stringify(data))
    form.reset()
}