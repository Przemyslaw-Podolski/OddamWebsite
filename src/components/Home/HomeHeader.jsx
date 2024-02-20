import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"
import React from "react";
import HomeHeaderBody from "./HomeHeaderBody";

const HomeHeader = () =>{
    function handleOCoChodzi(){
        scroll.scrollTo(1200);
    }

    function handleONas(){
        scroll.scrollTo(2400);
    }

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
                    <li className={"nav__element"} onClick={handleOCoChodzi}>O co chodzi?</li>
                    <li className={"nav__element"} onClick={handleONas}>O nas</li>
                    <li className={"nav__element"}>Fundacja i organizacja</li>
                    <li className={"nav__element"}>Kontakt</li>
                </ul>
                <HomeHeaderBody/>
            </div>
        </div>
    )
}

export default HomeHeader;
