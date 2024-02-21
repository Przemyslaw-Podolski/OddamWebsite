import React, { useState } from "react";
const HomeWhoWeHelp = () => {
    const [organization, setOrganization] = useState(0);
    const [offset, setOffset] = useState(0);
    const [itemsCnt, setItemsCnt] = useState(9);
    const [orgType, setOrgType] = useState("Fundacja");
    const [btnClass, setBtnClass] = useState(["small_btn set", "small_btn unset", "small_btn unset" ])

    const charityList = [
        {
            name: "Dbam o Zdrowie",
            goal: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
        },
        {
            name: "Dla dzieci",
            goal: "Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki"
        },
        {
            name: "Bez domu",
            goal: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce"
        },
        {
            name: "Koliber",
            goal: "Pomoc dla w spełnieniu marzeń dzieci nieuleczalnie chorych.",
            needs: "zabawki, ubrania"
        },
        {
            name: "Bambolejra",
            goal: "Pomoc dla mnie żebym miał za co chlać.",
            needs: "wóda i ciężkie dragi"
        },
        {
            name: "Lorem Ipsum",
            goal: "Pomoc Lorem Impsum to mój ziomek.",
            needs: "kiełbasa i podroby"
        },
        {
            name: "Loreal Pari",
            goal: "Pomoc pomoc pomoc.",
            needs: "siemanko wszystkim"
        },
        {
            name: "Eutanazja",
            goal: "Pomoc tym, którym już pomóc nie można.",
            needs: "pawulon"
        },
        {
            name: "Piotruś",
            goal: "Pomoc w sprawach, o których Piotruś nie chce mówić.",
            needs: "wazelina i ogórki"
        }
    ]
    const ngoList = [
        {
            name: "Drum Basstion",
            goal: "Organizacja imprez i aktywizacja społeczności lokalnej.",
            needs: "sprzęd grający, instrumenty muzyczne"
        },
        {
            name: "Rzeźnik",
            goal: "Pomoc rzeźnikom i masażom.",
            needs: "noże tasaki i młotki"
        },
        {
            name: "Lorem Ipsum 1 ",
            goal: "Quis varius quam quisque vi diam quam elementum puvlium.",
            needs: "Galitare Egsestas, tempus"
        },
        {
            name: "Lorem Ipsum 2 ",
            goal: "Quis varius quam quisque vi diam quam elementum puvlium.",
            needs: "Galitare Egsestas, tempus"
        },
        {
            name: "Lorem Ipsum 3 ",
            goal: "Quis varius quam quisque vi diam quam elementum puvlium.",
            needs: "Galitare Egsestas, tempus"
        },
        {
            name: "Lorem Ipsum",
            goal: "Pomoc Lorem Impsum to mój ziomek.",
            needs: "kiełbasa i podroby"
        }
    ]
    const localList = [
        {
            name: "Lorem Ipsum 1",
            goal: "Quis varius quam quisque vi diam quam elementum puvlium.",
            needs: "Galitare Egsestas, tempus"
        },
        {
            name: "Lorem Ipsum 2",
            goal: "Quis varius quam quisque vi diam quam elementum puvlium.",
            needs: "Galitare Egsestas, tempus"
        },
        {
            name: "Lorem Ipsum 3",
            goal: "Quis varius quam quisque vi diam quam elementum puvlium.",
            needs: "Galitare Egsestas, tempus"
        }
    ]

    const inputList = [charityList, ngoList, localList];

    function handleCharity(){
        setOrganization(0);
        setOffset(0);
        setOrgType("Fundacja");
        setItemsCnt(inputList[0].length);
        console.log("Organization code: ", organization);
    }

    function handleNgo(){
        setOrganization(1);
        setOffset(0);
        setOrgType("Organizacja");
        setItemsCnt(inputList[1].length);
        console.log("Organization code: ", organization);
    }

    function handleLocal(){
        setOrganization(2);
        setOffset(0);
        setOrgType("Zbiórka lokalna");
        setItemsCnt(inputList[2].length);
        console.log("Organization code: ", organization);
    }

    function handleOffset0(){
        setOffset(0);
        setBtnClass(["small_btn set", "small_btn unset", "small_btn unset" ]);
    }

    function handleOffset3(){
        setOffset(3);
        setBtnClass(["small_btn unset", "small_btn set", "small_btn unset" ]);
    }

    function handleOffset6(){
        setOffset(6);
        setBtnClass(["small_btn unset", "small_btn unset", "small_btn set" ]);
    }

    return(
        <div className="home__help">
            <h2 className="help__title">Komu pomagamy?</h2>
            <div className="help__ornament"></div>
            <div className="help__menu">
                <button className="menu__charity menu_btn" onClick={handleCharity}>Fundacjom</button>
                <button className="menu__ngo menu_btn" onClick={handleNgo}>Organizacjom pozarządowym</button>
                <button className="menu__local menu_btn" onClick={handleLocal}>Lokalnym zbiórkom</button>
            </div>
            <p className="help__text">W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <div className="help__list">
                <div className="list__element1 list__el">
                    <div className="list__left">
                        <h5 className="list__name">{orgType}: "{inputList[organization][offset].name}"</h5>
                        <p className="list__desc">{inputList[organization][offset].goal}</p>
                    </div>
                    <p className="list__needs">{inputList[organization][offset].needs}</p>

                </div>
                <div className="list__element1 list__el">
                    <div className="list__left">
                        <h5 className="list__name">{orgType}: "{inputList[organization][offset + 1].name}"</h5>
                        <p className="list__desc">{inputList[organization][offset + 1].goal}</p>
                    </div>
                    <p className="list__needs">{inputList[organization][offset + 1].needs}</p>
                </div>
                <div className="list__element1 list__el">
                    <div className="list__left">
                        <h5 className="list__name">{orgType}: "{inputList[organization][offset + 2].name}"</h5>
                        <p className="list__desc">{inputList[organization][offset + 2].goal}</p>
                    </div>
                    <p className="list__needs">{inputList[organization][offset + 2].needs}</p>
                </div>
            </div>
            {itemsCnt > 6 ?
                <div className="small__container">
                    <button className={btnClass[0]} onClick={handleOffset0} >1</button>
                    <button className={btnClass[1]}  onClick={handleOffset3} >2</button>
                    <button className={btnClass[2]}  onClick={handleOffset6} >3</button>
                </div>
                :
                itemsCnt > 3 ?
                    <div className="small__container">
                        <button className={btnClass[0]} onClick={handleOffset0} >1</button>
                        <button className={btnClass[1]} onClick={handleOffset3} >2</button>
                    </div>
                    :
                <div className="small__container"></div>
            }
        </div>
    )
}

export default HomeWhoWeHelp;

