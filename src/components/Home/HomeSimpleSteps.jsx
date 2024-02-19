import {Link} from "react-router-dom";
const HomeSimpleSteps = () => {
    return(
        <div className="setps">
            <h2 className="steps__title">Wystarczą 4 proste kroki</h2>
            <div className="steps__ornament"></div>
            <div className="steps__container">
                <div className="steps__element element_1">
                    <div className="steps__icon"></div>
                    <div className="steps__subtitle">Wybierz rzeczy</div>
                    <div className="steps__underline"></div>
                    <div className="steps__text">ubrania, zabawki, sprzęt i inne</div>
                </div>
                <div className="steps__element element_2">
                    <div className="steps__icon"></div>
                    <div className="steps__subtitle">Spakuj je</div>
                    <div className="steps__underline"></div>
                    <div className="steps__text">skorzystaj z worków na śmieci</div>
                </div>
                <div className="steps__element element_3">
                    <div className="steps__icon"></div>
                    <div className="steps__subtitle">Zdecyduj komu chcesz pomóc</div>
                    <div className="steps__underline"></div>
                    <div className="steps__text">wybierz zaudane miejsce</div>
                </div>
                <div className="steps__element element_4">
                    <div className="steps__icon"></div>
                    <div className="steps__subtitle">Zamów kuriera</div>
                    <div className="steps__underline"></div>
                    <div className="steps__text">kurier przyjedzie w dogodnym terminie</div>
                </div>
            </div>
            <div className="steps__button">
                <Link to='/logowanie' className={"nav__button__big"}><div>{"ODDAJ"}<br />{"RZECZY"}</div></Link>
            </div>

        </div>
    )
}

export default HomeSimpleSteps;