import React from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
const Navigation = ()=>{

    const location = useLocation()
    return(
        <div >
            <Link to={"/home"}>
                <button>Home</button>
            </Link>
            <Link to={"/form"}>
                <button>Create Driver</button>
            </Link>
            <Link to={"/"}>
                <button>Log Out</button>
            </Link>
  
        </div>
    );
}

export default Navigation