const HomeContact = () => {
    const msgPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return(
        <div className="home__contact">
            <div className="contact__container">
                <h2 className="contact__title">Skontaktuj się z nami</h2>
                <div className="contact__ornament"></div>
                <form className="contact__form">

                    <div className="form__container">
                        <div className="form__name">
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input type="text" id="name" name="name" placeholder="Krzysztof..." />
                        </div>
                        <div className="form__email">
                            <label htmlFor="email">Wpisz swój email</label>
                            <input type="email" id="email" name="email" placeholder="abc@xyz.com" />
                        </div>
                        <div className="form__subject">
                            <label htmlFor="subject">Wpisz swoją wiadomość</label>
                            <textarea id="subject" name="subject" placeholder={msgPlaceholder}></textarea>
                        </div>
                    </div>

                    <input className="form__button" type="submit" value="Wyślij"/>

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