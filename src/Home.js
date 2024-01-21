import React from "react";
import "./Home.css"


function Home(){
    return(
        <div>
        <h1>Hello</h1>
        <div class="buttons">
        <a href="/signup">
            <button>NewUser</button>
        </a>
        <br />
        <a href="login">
            <button>Login</button>
        </a>
        </div>
    </div>
    )
}
export default Home;