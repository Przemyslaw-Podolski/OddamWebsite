import React, { useState, useEffect } from "react";
const HomeContact = () => {
    const msgPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [inputClass, setInputClass] = useState(["input__ok","input__ok","input__ok"]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        console.log(inputFields);

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputFields)
        }).then(res => res.json())
            .then(res => console.log(res));

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

        if (inputValues.name.includes(" ")) {
            errors.name = "Name must be one word";
            newInputClasses[0] = "input__error";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputValues.email)) {
            errors.email = "Invalid email address";
            newInputClasses[1] = "input__error";
        }
        if (!inputValues.message || inputValues.message.length < 120) {
            errors.message = "Message has to be longer that 120 chars";
            newInputClasses[2] = "input__error";
        }
        setInputClass(newInputClasses);
        return errors;
    };

    return(
        <div className="home__contact">
            <div className="contact__container">
                <h2 className="contact__title">Skontaktuj się z nami</h2>
                <div className="contact__ornament"></div>

                {Object.keys(errors).length === 0 && submitting ? (
                    <span className="contact__success">Wiadomość została wysłana!{`\n`}Wkrótce się skontaktujemy.</span>
                ) : null}

                <form onSubmit={handleSubmit}
                      noValidate
                      autoComplete="off"
                      className="contact__form">

                    <div className="form__container">
                        <div className="form__name">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input type="text"
                                   id="name"
                                   name="name"
                                   placeholder="Krzysztof..."
                                   onChange={handleChange}
                                   value={inputFields.name}
                                   className={inputClass[0]}
                            />

                        {errors.name ? (
                            <p className="error">
                                Podanie imię jest nie prawidłowe!
                            </p>
                        ) : null}
                        </div>

                        <div className="form__email">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="abc@xyz.com"
                                onChange={handleChange}
                                value={inputFields.email}
                                className={inputClass[1]}
                            />

                            {errors.email ? (
                                <p className="error">
                                    Podany email jest nie prawidłowy!
                                </p>
                            ) : null}

                        </div>
                        <div className="form__subject">
                            <label htmlFor="subject">Wpisz swoją wiadomość</label>
                            <textarea
                                id="subject"
                                name="message"
                                placeholder={msgPlaceholder}
                                onChange={handleChange}
                                value={inputFields.message}
                                className={inputClass[2]}
                            />

                            {errors.message ? (
                                <p className="error">
                                    Wiadomość musi mieć conajmnie 120 znaków!
                                </p>
                            ) : null}

                        </div>
                    </div>

                    <button className="form__button" type="submit" value="Wyślij">Wyślij</button>

                </form>
            </div>
            <footer className="home__footer">
                <small className="footer__copyright">Copyright by Coders Lab</small>
                <div className="footer__icons">
                    <div className="icons__facebook"></div>
                    <div className="icons__instagram"></div>
                </div>

            </footer>
        </div>
    )
}

export default HomeContact;