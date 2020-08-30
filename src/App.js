import React from 'react'
import {Route, NavLink, Switch, Redirect, withRouter} from "react-router-dom"

import About from "./components/About/About";
import Cars from "./components/Cars/Cars";
import Car from "./components/Cars/Car/Car";
import Cardetail from "./components/Cars/Cardetail/Cardetail";

class App extends React.Component {

    state = {
        cars: [
            {name: 'audi', year: 2005, color: 'red', namedriver: 'Дормидонт', id: 111},
            {name: 'шкода', year: 2005, color: 'red', namedriver: 'Дормидонт', id: 222},
            {name: 'бмв', year: 2005, color: 'red', namedriver: 'Дормидонт', id: 333},
        ]
    }

    render() {

        const {cars} = this.state

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
                <h1>Автомобили</h1>
                <input type="text" id="newColorItem1"/><button>Сменить цвет</button><br />
                <input type="text" id="newNameItem0"/><button>Сменить водителя</button><br />
                <input type="text" id="name"/><button>Сменить название</button>

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

export default App;
