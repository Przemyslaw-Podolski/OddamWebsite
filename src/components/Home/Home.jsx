import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import React from "react";

const Home = () =>{
    return(
        <div className="home">
            <HomeHeader/>
            <HomeThreeColumns />
            <HomeSimpleSteps />
        </div>
    )
}

export default Home;