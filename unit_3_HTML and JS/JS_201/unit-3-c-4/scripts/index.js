/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
let form = document.getElementById('user-form')
function submit()
{
    let data = {
        image:form.user_pic.value,
        name:form.user_name.value,
        email:form.user_email.value,
        country:form.user_country.value,
    }
    console.log(data)
    localStorage.setItem('user',JSON.stringify(data))
    form.user_pic.value = ''
    form.user_name.value = ''
    form.user_email.value = ''
}

    
    

