import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import React from "react";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

const Home = () =>{
    return(
        <div className="home">
            <HomeHeader/>
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAbout />
            <HomeWhoWeHelp />
            <HomeContact />
        </div>
    )
}

export default Home;