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

            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        // console.log("render")
        // console.log(this.state)

        // const cars = this.state.cars

        //console.log(Array.isArray(cars))

        return (
            <div>
                    {/*{*/}
                    {/*    (cars.length != 0) ?*/}
                    {/*    cars.map((car, i) => {*/}
                    {/*        const {name, year, color, namedriver, id} = car*/}
                    {/*        return <Car key={i} {...car} />*/}
                    {/*    }) : null*/}
                    {/*}*/}

                {this.renderCars()}
            </div>
        )
    }
}
