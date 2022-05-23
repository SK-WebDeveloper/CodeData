var form = document.querySelector("form")

    form.addEventListener("submit", function(event){
        event.preventDefault();

        var data = {
            username:form.username.value,
            contact:form.contact.value,
            email:form.email.value,
            password:form.password.value,

        }
        console.log(data)

        localStorage.setItem("userData",JSON.stringify(data))
        window.location.reload()
    })