
let data = JSON.parse(localStorage.getItem('userData')) || []

let arr = []
arr.push(data)

let si = document.getElementById('si')
let su = document.getElementById('su')
let form = document.getElementById('signin')
form.addEventListener('submit',function(event){
    event.preventDefault()
    arr.forEach(function(el){
        console.log(el)
        if(form.username.value==el.username && form.password.value==el.password){
            alert('Login Successful')
            si.innerText = el.username
            su.innerText = el.name
            window.location.href = './index.html'
        }
        if(form.username.value==el.username || form.password.value==el.password){
            alert('Invalid username or password')
        }
        if(form.username.value!=el.username && form.password.value!=el.password){
            alert('no data found')
            window.location.href = 'sigup.html'
        }
    })
})