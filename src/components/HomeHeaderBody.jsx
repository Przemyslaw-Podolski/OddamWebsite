import {Link} from "react-router-dom";
const HomeHeaderBody = () =>{
    return(
        <>
            <h3>Zacznij pomagać!</h3>
            <h3>Oddaj niechciane rzeczy w zaufane ręce</h3>
            <nav>
                <Link to='/logowanie' className={"nav__button__big"}>ODDAJ RZECZY</Link>
                <Link to='/logowanie' className={"nav__button__big"}>ZORGANIZUJ ZBIÓRKĘ</Link>
            </nav>
        </>
    )
}

export default HomeHeaderBody;


