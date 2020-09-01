import React, {Component} from 'react';
import Car from "./Car/Car";
import axios from 'axios'

export default class Cars extends Component {

    state = {
        cars: []
    }

    renderCars() {
        return this.state.cars.map((car, i) => {
            const {name, year, color, namedriver, id} = car
            return <Car key={i} {...car} />
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.post('http://ajax/projectcars/');

            this.setState({cars: response.data})
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        return (
            <div>
                {this.renderCars()}
            </div>
        )
    }
}
