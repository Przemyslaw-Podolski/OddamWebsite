const HomeContact = () => {
    const msgPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return(
        <div className="home__contact">
            <div className="contact__container">
                <h2 className="contact__title">Skontaktuj się z nami</h2>
                <div className="contact__ornament"></div>
                <form className="contact__form">
                    <label htmlFor="name">Wpisz swoje imię</label>
                    <input type="text" id="name" name="name" placeholder="Krzysztof..." />

                    <label htmlFor="email">Wpisz swój email</label>
                    <input type="email" id="email" name="email" placeholder="abc@xyz.com" />

                    <label htmlFor="subject">Wpisz swoją wiadomość</label>
                    <textarea id="subject" name="subject" placeholder={msgPlaceholder} style={{height:"200px"}}></textarea>

                    <input type="submit" value="Wyślij"/>

                </form>
            </div>
            <footer className="home__footer">
                <small className="footer__copyright">Copyright by Coders Lab</small>
                <div className="footer__facebook"></div>
                <div className="footer__instagram"></div>
            </footer>
        </div>
    )
}

export default HomeContact;