import React from "react";
import "./Footer.css";
import apple from "./apple_icon.png"
import google from "./google_icon.png"

export default function Footer()
{
    return(
        <div className = "footer">
            <section className = "thankyou">
                <p>Thank you for being our customer!</p>
            </section>
            <section className = "footerinfo">
                <section className = "footerapps">
                    <p>ORDER FROM OUR APP</p>
                    <ul className = "apps">
                        <h3><img className = "apple" alt = "Apple logo" src = {apple} align = "center"></img>  Apple App Store</h3>
                        <h3><img className = "google" alt = "Google logo" src = {google} align = "center"></img>  Google Play Store</h3>
                    </ul>
                </section>
                <section className = "contact">
                    <p>CONTACT US</p>
                    <button type = "button">CUSTOMER SERVICE</button>
                </section>
            </section>
            <p>Copyright 2022 Pizza King Inc. All rights reserved.</p>
        </div>
    )
}