import React from 'react'
import {Route, NavLink, Switch, Redirect, withRouter} from "react-router-dom"
import {connect} from 'react-redux'

import About from "./components/About/About";
import Cars from "./components/Cars/Cars";
import Cardetail from "./components/Cars/Cardetail/Cardetail";
import {changeNameApp, changeNameButtonApp} from "./store/actions/actions";

class App extends React.Component {

    toggleCars = () => {
        console.log(1)
    }

    changeName = (name) => {
        this.props.onChangeName(name);
    }

    changeNameButton = (name) => {
        this.props.onChangeNameButton(name);
    }

    render() {
        // console.log(this.props)
        const {cars} = this.props
        // console.log(cars)

        return (
            <div className="App">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about/">About</NavLink>
                <NavLink to="/cars/">Cars</NavLink>
                {
                    cars.map((car, i) => {
                        const {name, year, color, namedriver, id} = car;
                        return <NavLink key={i} to={`/cars/${id}`}>Car111</NavLink>
                    })
                }
                <h1>{this.props.nameButton}</h1>
                <p>{this.props.name}</p>
                <button onClick={this.toggleCars}>Toggle cars</button>
                <input type="text" id="newColorItem1"/><button>Сменить цвет</button><br />
                <input type="text" id="newNameItem0"/><button>Сменить водителя</button><br />
                <input type="text" onChange={event => this.changeName(event.target.value)} /><button onClick={() => this.changeNameButton(" change")}>Сменить название всей страницы</button>

                <Switch>
                    <Route path="/about/" exact component={About} />
                    <Route path="/cars/:id" render={({match}) => {
                        return <Cardetail car={cars.filter((car) => car.id == match.params.id)[0]} />
                    }} />
                    <Route path="/cars/" exact render={() => <Cars cars={cars} />} />
                    <Route path="/" exact render={() => <h1>Главная</h1>} />
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars.cars,
        name: state.app.name,
        nameButton: state.app.nameButton,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(changeNameApp(name)),
        onChangeNameButton: (name) => dispatch(changeNameButtonApp(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
