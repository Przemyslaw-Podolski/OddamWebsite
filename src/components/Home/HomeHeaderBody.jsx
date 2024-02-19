import {Link} from "react-router-dom";
const HomeHeaderBody = () =>{
    return(
        <div className="header__body">
            <h3 className="header__title">Zacznij pomagać!</h3>
            <h3 className="header__title">Oddaj niechciane rzeczy w zaufane ręce</h3>
            <div className="header__ornament"></div>
            <nav className="header__menu">
                <Link to='/logowanie' className={"nav__button__big"}><div>{"ODDAJ"}<br />{"RZECZY"}</div></Link>
                <Link to='/logowanie' className={"nav__button__big"}><div>ZORGANIZUJ ZBIÓRKĘ</div></Link>
            </nav>
        </div>
    )
}

export default HomeHeaderBody;