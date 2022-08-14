import React from "react";
import "./Header.css";
import logo from "./PK_logo.png";

export default function Header()
{
    return(
        <div className = "header">
            <ul>
                <li><img alt = "Pizza King logo" src = {logo} align = "center"/></li>
                <li className = "active">MENU</li>
                <li>SPECIALS</li>
                <li>LOG-IN</li>
                <li>CART</li>
            </ul>
        </div>
    )
}