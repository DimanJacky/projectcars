import React, {Component} from 'react';
import Car from "./Car/Car";

export default class Cars extends Component {

    render() {

        const {cars} = this.props

        return (
            <div>
                <div>
                    {
                        cars.map((car, i) => {
                            const {name, year, color, namedriver} = car
                            return <Car key={i} {...car} />
                        })
                    }
                </div>
            </div>
        )
    }
}
