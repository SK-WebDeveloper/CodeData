import navbar from "../components/navbar.js";
//console.log(navbar())
document.getElementById("navbar").innerHTML = navbar();

let Form = document.getElementById("form");
let container = document.getElementById("container");
// let details = document.getElementById("details");

Form.addEventListener("submit", (event) => {
  event.preventDefault();
  let query = document.getElementById("search").value;
  // container.innerHTML = null
  // details.style.display = "none";
  searchFood(query);
  // window.location.href = 'index.html'
});

let searchFood = async (query) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  try {
    let res = await fetch(url);
    let data = await res.json(); // collecting data
    console.log(data);
    append(data.meals);
  } catch (error) {
    console.log("error data not found....!");
  }
};

function append(data) {
  container.innerHTML = null;
  let store = document.createElement("div");
  store.setAttribute("id", "store");
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "card");
    div.addEventListener("click", function () {
      // details.style.display = "none";
      // container.style.display = "none";
      appendDetails(el);
    });

    let image = document.createElement("img");
    image.src = el.strMealThumb;
    image.setAttribute("id", "photo");

    let name = document.createElement("h2");
    name.innerText = el.strMeal;

    div.append(image, name);

    store.append(div);
    container.append(store);
  });
}
function appendDetails(data) {
  container.innerHTML = null;
  // details.style.display = "block";
  console.log(data);

  let top = document.createElement("div");
  top.setAttribute("id", "top");

  let title = document.createElement("p");
  title.innerText = data.strMeal;

  top.append(title);

  // bottom div for the poster and details

  let bottom = document.createElement("div");
  bottom.setAttribute("id", "bottom");

  // bottom - left div is for the poster only

  let left = document.createElement("div");
  left.setAttribute("id", "left");

  let img = document.createElement("img");
  img.src = data.strMealThumb;

  left.append(img);

  // bottom - right div is for the details

  let right = document.createElement("div");
  right.setAttribute("id", "right");

  // right - up div is for ytlink

  let up = document.createElement("div");
  up.setAttribute("id", "up");

  let logo = document.createElement("img");
  logo.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/1200px-YouTube_social_white_squircle.svg.png";

  let ytlink = document.createElement("p");
  ytlink.innerText = data.strYoutube;
  ytlink.onclick = () => {
    window.location.href = data.strYoutube;
  };

  let recommended;

  up.append(logo, ytlink, recommended || "");

  // right - mid div is for instruction

  let mid = document.createElement("div");
  mid.setAttribute("id", "mid");

  let insdiv = document.createElement("div");
  insdiv.setAttribute("id", "insdiv");
  let insSpan = document.createElement("span");
  insSpan.innerText = "Instruction : ";

  let ins = document.createElement("p");
  ins.innerText = data.strInstructions;

  insdiv.append(insSpan, ins);

  let areaDiv = document.createElement("div");

  let areaSpan = document.createElement("span");
  areaSpan.innerText = "Area : ";

  let area = document.createElement("p");
  area.innerText = data.strArea;

  areaDiv.append(areaSpan, area);

  let catDiv = document.createElement("div");

  let catSpan = document.createElement("span");
  catSpan.innerText = "Category : ";

  let cat = document.createElement("p");
  cat.innerText = data.strCategory;

  catDiv.append(catSpan, cat);

  mid.append(insdiv, areaDiv, catDiv);

  // child div of right - down div

  let down = document.createElement("div");
  down.setAttribute("id", "down");

  let tagDiv = document.createElement("div");

  let tagSpan = document.createElement("span");
  tagSpan.innerText = "Tag : ";

  let tag = document.createElement("p");
  tag.innerText = data.strTags;

  tagDiv.append(tagSpan, tag);

  let ingredientDiv = document.createElement("div");

  let ingredientSpan = document.createElement("span");
  ingredientSpan.innerText = "Ingredient : ";

  let ingredient = document.createElement("p");
  ingredient.innerText = `${data.strIngredient1},${data.strIngredient2},${data.strIngredient3},${data.strIngredient4},${data.strIngredient5},${data.strIngredient6} etc`;

  ingredientDiv.append(ingredientSpan, ingredient);

  down.append(tagDiv, ingredientDiv);

  // appending all the child div of the right to the right

  right.append(up, mid, down);

  // appending all the child div of the bottom to the bottom

  bottom.append(left, right);

  // appending all the child of the display to the display

  let details = document.createElement("div");
  details.setAttribute("id", "details");
  details.append(top, bottom);
  container.append(details);
}
