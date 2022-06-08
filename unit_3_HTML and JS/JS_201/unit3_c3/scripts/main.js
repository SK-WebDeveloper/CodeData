let form = document.querySelector('form')

form.addEventListener('submit',function(event){

    event.preventDefault();
    let data = {
        name: form.name.value,
        email:form.email.value,
        address:form.address.value,
        amount:form.amount.value
    }
    // console.log(data)
    localStorage.setItem('user',JSON.stringify(data))
    form.name.value = ''
    form.email.value = ''
    form.address.value = ''
    form.amount.value = ''
})