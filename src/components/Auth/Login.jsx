import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Login = () =>{
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
                <h1>Zaloguj się</h1>
                <div className="login__ornament"></div>
                <div className="login__form__container">
                    <form onSubmit={handleSubmit}
                          noValidate
                          autoComplete="off"
                          className="login__form">
                        <div className="form__container">
                            <div className="form__email">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form__email">
                                <label htmlFor="password">Hasło</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="form__buttons">
                        <Link to='/rejestracja' className={"nav__element"}>Załóż konto</Link>
                        <button className="form__button" type="submit" value="Zaloguj">Zaloguj się</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;