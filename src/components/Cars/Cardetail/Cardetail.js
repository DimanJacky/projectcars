import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Cardetail extends Component {

    render() {

        console.log(this.props)
        const {car} = this.props
        const {name, year, color, namedriver, id} = car

        return (
            <div>
                <div>
                    <h1 style={{color: this.props.color, margin: 0}}>Автомобиль</h1>
                    <h4>{name} {year} {namedriver}</h4>
                    <input type="text" /><button>Сменить цвет</button><br />
                    <input type="text" /><button>Сменить название</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Cardetail)