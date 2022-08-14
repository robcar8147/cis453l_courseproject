import React, {Component} from "react";

export default class StixWings extends Component
{
    render()
    {
        return(
            <div className = "stixwings">
                <section className = "cheesebreadstix">
                    <h2>CHEESE BREADSTIX</h2>
                    <ul className = "sizes">
                        <li>Small - $4.99</li>
                        <li>Large - $7.99</li>
                        <li>Extra Large - $10.99</li>
                    </ul>
                    <p>We brush our crust with butter and top it wit loads of cheese. After baking we slice it into strips and serve with our famous pizza sauce for dipping!</p>
                    <button type = "button">ORDER NOW</button>
                </section>
                <br></br>
                <section className = "cinnstix">
                    <h2>CINNAMON STIX</h2>
                    <ul className = "sizes">
                        <li>$3.49</li>
                    </ul>
                    <p>Breadstix made with the perfect blend of Cinnamon and Sugar with icing drizzled on top!</p>
                    <button type = "button">ORDER NOW</button>
                </section>
                <br></br>
                <section className = "appstix">
                    <h2>APPLE STIX</h2>
                    <ul className = "sizes">
                        <li>$4.99</li>
                    </ul>
                    <p>Breadstix made with apple topping and streusel with icing drizzled on top!</p>
                    <button type = "button">ORDER NOW</button>
                </section>
                <br></br>
                <section className = "wings">
                    <h2>WINGS</h2>
                    <ul className = "sizes">
                        <li>10pc - $9.99</li>
                        <li>20pc - $18.99</li>
                        <li>30pc - $27.99</li>
                    </ul>
                    <p>Available in Plain, Hot, BBQ</p>
                    <p>Served with ranch dressing</p>
                    <button type = "button">ORDER NOW</button>
                    <br></br>
                    <br></br>
                    <hr class = "solid"></hr>
                    <br></br>
                    <section className = "boneless">
                        <ul className = "sizes">
                            <li>1/2 Pound Order Boneless Wings (8 to 10 pieces) - $6.49</li>
                        </ul>
                        <ul className = "sizes">
                            <li>One Pound Order Boneless Wings (16 to 20 pieces) - $12.49</li>
                        </ul>
                    </section>
                    <p>Boneless wings with your choice of dipping sauce. Choose from ranch dressing, BBQ or hot sauce.</p>
                    <button type = "button">ORDER NOW</button>
                </section>
                <br></br>
                <br></br>
            </div>
        );
    }
}