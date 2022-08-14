import React, {Component} from "react";

export default class Pizza extends Component
{
    render()
    {
        return(
            <div>
                <section className = "create">
                    <h2>CREATE YOUR OWN</h2>
                    <ul className = "sizes">
                        <li>Medium - $10.99</li>
                        <li>Large - $11.99</li>
                        <li>Extra Large - $12.99</li>
                    </ul>
                    <p>Includes your choice of crust.</p>
                    <button type = "button">ORDER NOW</button>
                </section>
                <br></br>
                <hr class = "solid"></hr>
                <section className = "toppings">
                    <h3>Extra Toppings</h3>
                    <ul className = "sizes">
                        <li>Medium - $1.09</li>
                        <li>Large - $1.29</li>
                        <li>Extra Large - $1.59</li>
                    </ul>
                    <section className = "availabletop">
                        <h4>AVAILABLE TOPPINGS</h4>
                        <p>Green Peppers, Onions, Pepperoni, Sausage,</p>
                        <p>Mushrooms,Beef, Black Olives, Banana Peppers, Salami, Tomato</p>
                        <p>Bacon, Italian Sausage, Extra Cheese, Pineapple, Jalapeno Peppers</p>
                    </section>
                </section>
                <section className = "specialty">
                    <h2>SPECIALTY PIZZAS</h2>
                    <ul className = "sizes">
                        <li>Medium - $15.35</li>
                        <li>Large - $17.15</li>
                        <li>Extra Large - $19.35</li>
                    </ul>
                    <br></br>
                    <section className = "orderoptions">
                        <section className = "kingsgarden">
                            <h3>KINGS GARDEN</h3>
                            <p>Green Peppers, Onions, Mushrooms, Black Olives, Extra Cheese</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "kingsdeluxe">
                            <h3>KINGS DELUXE</h3>
                            <p>Green Peppers, Onions, Pepperoni, Sausage, Mushrooms</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "kingssupreme">
                            <h3>KINGS SUPREME</h3>
                            <p>Green Peppers, Onions, Pepperoni, Ham, Black Olives, Beef, Mushrooms, Sausage, Banana Peppers</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "kingshawaiian">
                            <h3>KINGS HAWAIIAN</h3>
                            <p>Ham, Pineapple, Extra Cheese</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "allmeat">
                            <h3>ALL MEAT PIZZA</h3>
                            <p>Pepperoni, Ham, Beef, Sausage, Bacon</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "bbqchicken">
                            <h3>BBQ CHICKEN PIZZA</h3>
                            <p>Roasted Chicken, Onions, Cheese, BBQ Sauce</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "buffalochicken">
                            <h3>BUFFALO CHICKEN PIZZA</h3>
                            <p>Roasted Chicken, Onions, Cheese, Hot Sauce</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "chickenbacon">
                            <h3>CHICKEN BACON RANCH</h3>
                            <p>Ranch Dressing Base Topped with Bacon, Roasted Chicken, Onions, and Cheese</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                    </section>
                </section>
            </div>
        );
    }
}