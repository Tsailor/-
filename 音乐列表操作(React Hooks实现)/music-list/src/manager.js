import React from "react";

function Manager(){
    const { username } = useContext(AppContext);
    return(
        <div>
            {username}
        </div>
    )
}

export default Manager;
