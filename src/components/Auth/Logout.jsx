import {Link, useNavigate} from "react-router-dom";
import React from "react";

const Logout = () =>{
    const navigate = useNavigate();
    function handleSubmit (){
        console.log("Submit login");
    }

    function handleChange(){
        console.log("Change email");
    }

    function handleLink(){
        navigate('/');
    }

    function handleMainPage(){
        navigate('/')
    }

    return(
        <div className="login__page">
            <div className="login__nav">
                <nav className="login__menu">
                    <Link to='/logowanie' className={"nav__element"}>Zaloguj</Link>
                    <Link to='/rejestracja' className={"nav__element"}>Załóż konto</Link>
                </nav>
                <ul className="nav__menu">
                    <li className={"nav__element"}>Start</li>
                    <li className={"nav__element"} onClick={handleLink}>O co chodzi?</li>
                    <li className={"nav__element"} onClick={handleLink}>O nas</li>
                    <li className={"nav__element"} onClick={handleLink}>Fundacja i organizacja</li>
                    <li className={"nav__element"} onClick={handleLink}>Kontakt</li>
                </ul>

            </div>
            <div className="login__body">
                <div className="title__container">
                    <h1 className="login__title">Wylogowanie nastąpiło pomyślnie!</h1>
                </div>

                <div className="login__ornament"></div>
            </div>
            <button onClick={handleMainPage} className="main__btn">Strona Główna</button>
        </div>
    )
}

export default Logout;