import React, {Component} from 'react';
import Car from "./Car/Car";
import axios from 'axios'

export default class Cars extends Component {

    state = {
        cars: []
    }

    componentDidMount() {
        //console.log('componentDidMount')
        const carsResponse = axios.post('http://ajax/projectcars/')
            .then(response => {
                this.setState({
                    cars: response.data
                })
            })

        //console.log(carsResponse.data)

    }

    createCarsList = async () => {
        // const carsResponse = await axios.post('http://ajax/projectcars/').then(response => console.log(response))

        // return carsResponse
    }

    render() {
        console.log("render")
        console.log(this.state)

        const cars = this.state.cars

        //console.log(Array.isArray(cars))

        return (
            <div>
                    {
                        (cars.length != 0) ?
                        cars.map((car, i) => {
                            const {name, year, color, namedriver, id} = car
                            return <Car key={i} {...car} />
                        }) : null
                    }
            </div>
        )
    }
}
