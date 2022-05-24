function navbar(){
    return `<div>
   <a href="index.html"> <img src="https://www.themealdb.com/images/logo-small.png" alt=""></a>
</div>
<div>
    <input type="text" placeholder="search" id="inp" >
    <button id="btn">search</button>
</div>
<div id="details">
    <h2><a href="latest.html">Latest Receipes</a></h2>
    <h2><a href="login.html">Login</a></h2>
    <h2><a href="signup.html">Sign Up</a></h2>
</div>`
}

export {navbar}