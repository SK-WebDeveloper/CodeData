import navbar from "../components/navbar.js";
//console.log(navbar())
document.getElementById("navbar").innerHTML = navbar();


let Form = document.getElementById('form')

Form.addEventListener('submit', function(){
    event.preventDefault()
    let query = document.getElementById('search').value
    searchFood(query)
})

let searchFood = async (query) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try {
        let res = await fetch(url);
        let data = await res.json(); // collecting data
        console.log(data);
    } catch (error) {
        console.log("error data not found....!");
    }
}