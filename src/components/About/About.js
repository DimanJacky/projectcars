import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import Cars from "../Cars/Cars";
import AboutCars from "../AboutCars/AboutCars";

export default class About extends Component {

    goToHomePage = () => {
        this.props.history.push({
            pathname: "/"
        })
    }

    render() {

        console.log(this.props)

        return (
            <div>
                <h1>About</h1>
                <p>About About About Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut consequatur deserunt doloremque et facilis inventore iusto magni maxime nihil optio quasi quos rerum, similique tenetur, vero, vitae. Doloremque, nesciunt.</p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutcars/">AboutCars</NavLink>
                <NavLink to="/cars/">Cars</NavLink>
                <button onClick={this.goToHomePage}>Home</button>
                <Switch>
                    <Route path="/aboutcars/" component={AboutCars} />
                </Switch>
            </div>
        )
    }
}
