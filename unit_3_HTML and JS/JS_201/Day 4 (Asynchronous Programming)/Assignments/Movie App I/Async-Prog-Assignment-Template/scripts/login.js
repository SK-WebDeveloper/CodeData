var form = document.getElementById("login-form-div")
var userData  = JSON.parse(localStorage.getItem("userData"))
form.addEventListener("submit",function(event){
    event.preventDefault()

    var data = {
        email:form.email.value,
        password:form.password.value
    }
    if(userData==null){
        alert("Please create and account")
    }else if(userData.email==data.email && userData.password==data.password)
    {
        alert("Login Successfull")
        localStorage.setItem("signin",JSON.stringify("userData"))
        window.location.href = "index.html"
    }
    else
    {
        alert("Invalid username or pasword")
    }
})