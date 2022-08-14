import React, {Component} from "react";
import
{
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Pizza from "./Pizza";
import Subs from "./Subs";
import Pasta from "./Pasta";
import StixWings from "./StixWings";
import DrinksSides from "./DrinksSides";
import "./Menu.css";

export default class Menu extends Component
{
    render()
    {
        return(
            <HashRouter>
                <div className = "header">
                    <ul className = "left">
                        <li>PK</li>
                        <li>MENU</li>
                        <li>SPECIALS</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>LOG IN</li>
                        <li>CART</li>
                    </ul>
                </div>
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
                <div className = "footer">
                    <section className = "thankyou">
                        <p>Thank you for being our customer!</p>
                    </section>
                    <section className = "footerinfo">
                        <section className = "footerapps">
                            <p>ORDER FROM OUR APP</p>
                            <ul className = "apps">
                                <h3> Apple App Store</h3>
                                <h3> Google Play Store</h3>
                            </ul>
                        </section>
                        <section className = "contact">
                            <p>CONTACT US</p>
                            <button type = "button">CUSTOMER SERVICE</button>
                        </section>
                    </section>
                    <p>Copyright 2022 Pizza King Inc. All rights reserved.</p>
                </div>
            </HashRouter>
        );
    }
}