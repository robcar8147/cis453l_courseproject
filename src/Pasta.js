import React, {Component} from "react"

export default class Pasta extends Component
{
    render()
    {
        return(
            <div className = "pasta">
                <ul className = "sizes">
                    <li>$7.99 each</li>
                </ul>
                <section className = "pastaoptions">
                    <section className = "itroma">
                        <h3>Italian Rotini Marinara</h3>
                        <p>Single serving of Rotini Pasta with Italian Sausage and Marinara Sauce topped with Mozzarella Cheese and Italian Seasoning!</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "chialf">
                        <h3>Chicken Alfredo</h3>
                        <p>Single serving of Rotini Pasta and Creamy Alfredo Sauce mixed with Grilled Chicken Breast and topped with Mozzarella Cheese and Italian Seasoning!</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                    <section className = "buildown">
                        <h3>Build Your Own</h3>
                        <p>Build your own single serving of Pasta with your choice of Sauce and up to 3 Meat and Vegetable toppings!</p>
                        <button type = "button">ORDER NOW</button>
                    </section>
                </section>
            </div>
        );
    }
}