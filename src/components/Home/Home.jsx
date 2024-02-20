import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import React from "react";
import HomeAbout from "./HomeAbout";

const Home = () =>{
    return(
        <div className="home">
            <HomeHeader/>
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
        </div>
    )
}

export default Home;