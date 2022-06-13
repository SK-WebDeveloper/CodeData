function navbar() {
  return `<div id="left_">
    <h3>
        <a href="index.html">Home</a>
    </h3>
</div>
<div id="center_">
    <form id="form">
        <input type="text" placeholder="Search recipe by name" id="search">
        <input type="submit" value="Search" id = "submit">
    </form>
</div>
<div id="right_">
    <h3>
        <a href="day.html" id="day">Recipe of the Day</a>
    </h3>
    <h3>
        <a href="random.html" id="random">Random Recipe</a>
    </h3>`;
}

export default navbar
