function navbar() {
  return `<div id="left">
    <h3>
        <a href="index.html">Home</a>
    </h3>
</div>
<div id="center">
    <form id="form">
        <input type="text" placeholder="Search recipe by name" id="search">
        <input type="submit" value="Search" id = "submit">
    </form>
</div>
<div id="right">
    <h3>
        <a href="signup.html" id="su">Sign-Up</a>
    </h3>
    <h3>
        <a href="signin.html" id="si">Sign-In</a>
    </h3>`;
}

export default navbar
