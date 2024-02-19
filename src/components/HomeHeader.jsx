import {Link} from "react-router-dom";
import React from "react";

const HomeHeader = () =>{
    return(
        <>
            <h1>HomeHeader</h1>
            <nav>
                <Link to='/' className={"nav__element"}>Główna</Link>
                <Link to='/logowanie' className={"nav__element"}>Logowanie</Link>
                <Link to='/rejestracja' className={"nav__element"}>Rejestracja</Link>
            </nav>
        </>
    )
}

export default HomeHeader;
