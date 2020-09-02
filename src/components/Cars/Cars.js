import React, {Component} from 'react';
import Car from "./Car/Car";
import axios from 'axios'
import Loader from "../UI/Loader/Loader";

export default class Cars extends Component {

    state = {
        cars: [],
        loading: true
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

            this.setState({cars: response.data, loading: false})
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        return (
            <div>

                {
                    this.state.loading ?
                        <div style={{backgroundColor: '#555'}}>
                            <Loader/>
                        </div> :
                        this.renderCars()
                }

            </div>
        )
    }
}
