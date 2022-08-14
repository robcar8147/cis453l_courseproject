import React, {Component} from "react";
import
{
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Header from "../Header/Header.js";
import Pizza from "./Pizza";
import Subs from "./Subs";
import Pasta from "./Pasta";
import StixWings from "./StixWings";
import DrinksSides from "./DrinksSides";
import Footer from "../Footer/Footer.js";
import "./Menu.css";

export default class Menu extends Component
{
    render()
    {
        return(
            <HashRouter>
                <Header />
                <div className = "menu">
                    <ul className = "menuHeader">
                        <li><NavLink to = "/">PIZZA</NavLink></li>
                        <li><NavLink to = "/subs">SUBS</NavLink></li>
                        <li><NavLink to = "/pasta">PASTA</NavLink></li>
                        <li><NavLink to = "/stixwings">STIX &amp; WINGS</NavLink></li>
                        <li><NavLink to = "/drinkssides">DRINKS &amp; SIDES</NavLink></li>
                    </ul>
                </div>
                <div className = "content">
                    <Routes>
                        <Route path = "/" element = {<Pizza />}/>
                        <Route path = "/subs" element = {<Subs />}/>
                        <Route path = "/pasta" element = {<Pasta />}/>
                        <Route path = "/stixwings" element = {<StixWings />}/>
                        <Route path = "/drinkssides" element = {<DrinksSides />}/>
                    </Routes>
                </div>
                <Footer />
            </HashRouter>
        );
    }
}