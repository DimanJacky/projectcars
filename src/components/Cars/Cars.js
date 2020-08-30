import React, {Component} from 'react';
import Car from "./Car/Car";

export default class Cars extends Component {

    render() {

        const {cars} = this.props

        // console.log(cars)

        return (
            <div>
                    {
                        cars.map((car, i) => {
                            const {name, year, color, namedriver, id} = car
                            return <Car key={i} {...car} />
                        })
                    }
            </div>
        )
    }
}
