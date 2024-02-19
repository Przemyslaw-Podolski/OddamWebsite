import {Link} from "react-router-dom";
import React from "react";
import HomeHeaderBody from "./HomeHeaderBody";

const HomeHeader = () =>{
    return(
        <div className="home__header">
            <div className="header__left"></div>
            <div className="header__right">
                <nav className="login__menu">
                    <Link to='/logowanie' className={"nav__element"}>Zaloguj</Link>
                    <Link to='/rejestracja' className={"nav__element"}>Załóż konto</Link>
                </nav>
                <ul className="nav__menu">
                    <li className={"nav__element"}>Start</li>
                    <li className={"nav__element"}>O co chodzi?</li>
                    <li className={"nav__element"}>O nas</li>
                    <li className={"nav__element"}>Fundacja i organizacja</li>
                    <li className={"nav__element"}>Kontakt</li>
                </ul>
                <HomeHeaderBody/>
            </div>
        </div>
    )
}

export default HomeHeader;