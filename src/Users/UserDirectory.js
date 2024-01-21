import React, { useState } from "react";
import NewUser from "./NewUser";
import Login from "./UserLogin";

function UserDirectory(){
    
    return(
        <div>
            <NewUser />
            <Login />
        </div>
    )
}

export default UserDirectory;