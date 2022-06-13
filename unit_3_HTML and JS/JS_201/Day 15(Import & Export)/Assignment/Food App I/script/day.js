let getData = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.meals[0]);
  appendDetails(data.meals[0]);
};
getData();

let details = document.getElementById("details");

function appendDetails(data) {
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
  details.append(top, bottom);
}
