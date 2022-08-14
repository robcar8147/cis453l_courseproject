import React, {Component} from "react";

export default class Subs extends Component
{
    render()
    {
        return(
            <div className = "subs">
                <h2>Oven Toasted Subs</h2>
                <h3 className = "subsheader">Available in White or Wheat Bread</h3>
                <ul className = "sizes">
                    <li>Six Inch - $4.99</li>
                    <li>Twelve Inch - $7.99</li>
                </ul>
                <br></br>
                <section className = "orderoptions">
                    <section className = "italian">
                        <h3>Italian</h3>
                        <p>Ham, Salami, Pepperoni, Cheese, Lettuce, Tomato, Onions, Oil &amp; Vinegar, Mayo</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "club">
                        <h3>Club</h3>
                        <p>Turkey, Ham, Cheese, Lettuce, Tomato, Onions, Oil &amp; Vinegar, Mayo</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "ham">
                        <h3>Ham</h3>
                        <p>Ham, Cheese, Lettuce, Tomato, Onions, Oil &amp; Vinegar, Mayo</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "veggie">
                        <h3>Veggie</h3>
                        <p>Cheese, Lettuce, Tomato, Onions, Mushrooms, Green Pepeprs, Oil &amp; Vinegar, Mayo</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "turkey">
                        <h3>Turkey</h3>
                        <p>Turkey, Cheese, Lettuce, Tomato, Onions, Oil &amp; Vinegar, Mayo</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "meatball">
                        <h3>Meatball</h3>
                        <p>Meatballs, Sauce, Cheese</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "pizzasub">
                        <h3>Pizza Sub</h3>
                        <p>Pepperoni, Sauce, Pizza Cheese</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "steakcheese">
                        <h3>Steak &amp; Cheese</h3>
                        <p>Steak, Cheese</p>
                        <ul className = "sizes">
                            <li>Six Inch - $5.49</li>
                            <li>Twelve Inch - $8.49</li>
                        </ul>
                        <button type = "button">ORDER NOW</button>
                    </section>
                </section>
            </div>
        );
    }
}