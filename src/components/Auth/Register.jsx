import {Link, useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";

const Register = () =>{
    const navigate = useNavigate();
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
        password2: ""
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [inputClass, setInputClass] = useState(["input__ok","input__ok","input__ok"]);

    const handleSubmit = (event) => {
        console.log("Submit");
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        console.log(inputFields);

    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();

        }
    }, [errors]);

    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const validateValues = (inputValues) => {
        let errors = {};
        let newInputClasses = ["input__ok", "input__ok", "input__ok"];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValues.email)) {
            errors.email = "Invalid email address";
            newInputClasses[0] = "input__error";
        }
        if (!inputValues.password || inputValues.password.length < 6) {
            errors.password = "Message has to be longer that 120 chars";
            newInputClasses[1] = "input__error";
        }
        if (!inputValues.password2 || inputValues.password2 !== inputValues.password) {
            errors.password2 = "Repeat the same password";
            newInputClasses[2] = "input__error";
        }
        setInputClass(newInputClasses);
        return errors;
    };


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
                <h1>Załóż konto</h1>
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
                                    className={inputClass[0]}
                                />
                                {errors.email ? (
                                    <p className="error">
                                        Podany email jest nie prawidłowy!
                                    </p>
                                ) : null}
                            </div>
                            <div className="form__email">
                                <label htmlFor="password">Hasło</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    className={inputClass[1]}
                                />
                                {errors.password ? (
                                    <p className="error">
                                        Podane hasło jest za krótkie!
                                    </p>
                                ) : null}
                            </div>
                            <div className="form__email">
                                <label htmlFor="password2">Powtórz Hasło</label>
                                <input
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    onChange={handleChange}
                                    className={inputClass[2]}
                                />
                                {errors.password2 ? (
                                    <p className="error">
                                        Podane hasło musi być identyczne!
                                    </p>
                                ) : null}
                            </div>
                        </div>
                        <div className="form__buttons">
                            <Link to='/rejestracja' className={"nav__element"}>Zaloguj się</Link>
                            <button className="form__button" type="submit" value="Zaloguj">Załóż konto</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register;