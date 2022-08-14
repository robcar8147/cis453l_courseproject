import React, {Component} from "react";

export default class DrinksSides extends Component
{
    render()
    {
        return(
            <div cassName = "drinkssides">
                <section className = "drinks">
                    <h2>Drinks</h2>
                    <h3>Soda</h3>
                    <section className = "orderoptions">
                        <section className = "20oz">
                            <h3>20oz - $1.69</h3>
                            <p>Dasani Water, Diet Coke, Mello Yello, Pibb Xtra, Sprite, Coke Zero, Cherry Coke, Fanta Orange</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "2liter">
                            <h3>2 Liters - $2.49</h3>
                            <p>Coke, Diet Coke, Sprite, Mello Yello</p>
                            <button type = "button">ORDER NOW</button>
                        </section>
                    </section>
                    <h3>Half Gallon Fresh Brewed Tea - $2.89</h3>
                    <p>Available in sweet or sweetend with Splenda.</p>
                    <p>Brewed fresh each day in our store.</p>
                    <button type = "button">ORDER NOW</button>
                    <br></br>
                </section>
                <br></br>
                <section className = "sides">
                    <h2>Sides</h2>
                    <h3>Chips - 75¢</h3>
                    <p>Regular, BBQ, or Nacho Cheese</p>
                    <button type = "button">ORDER NOW</button>
                    <br></br>
                    <br></br>
                    <hr class = "solid"></hr>
                    <h3>HERSHEY'S Chocolate Crème Pie - $2.49</h3>
                    <button type = "button">ORDER NOW</button>
                    <br></br>
                    <br></br>
                    <hr class = "solid"></hr>
                    <h3>Ice Cream Singles - $2.49</h3>
                    <section className = "orderoptions">
                        <section className = "bananasplit">
                            <h3>Ittilitz Banana Split</h3>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "cottoncandy">
                            <h3>IttiBitz Cotton Candy</h3>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "cookiescream">
                            <h3>IttiBitz Cookies N Cream</h3>
                            <button type = "button">ORDER NOW</button>
                        </section>
                        <section className = "turtletrail">
                            <h3>Pecan Turtle Trail</h3>
                            <button type = "button">ORDER NOW</button>
                        </section>
                    </section>
                    <br></br>
                    <h3>Garlic Butter, Pizza Sauce or Ranch Dressing - 75¢/cup</h3>
                    <button type = "button">ORDER NOW</button>
                    <br></br>
                    <br></br>
                </section>
            </div>
        );
    }
}